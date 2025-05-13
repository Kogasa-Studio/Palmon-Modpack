
import tkinter as tk
from tkinter import filedialog, messagebox
import json
import os

class FoodEditor:
    def __init__(self, master):
        self.master = master
        self.master.title("Minecraft 食物属性编辑器")
        self.data = {}
        self.current_key = None
        self.original_data = {}
        self.file_path = ""

        # 左侧列表框
        self.listbox = tk.Listbox(master, width=60, height=30, font=("Arial", 12))
        self.listbox.grid(row=0, column=0, rowspan=10, padx=10, pady=10)
        self.listbox.bind("<<ListboxSelect>>", self.on_select)

        # 右侧标签和输入框
        self.fields = ["Nutrition", "Saturation", "water", "decayModifier", "grain", "fruit", "vegetables", "protein", "dairy"]
        self.entries = {}
        self.labels = {}
        for i, field in enumerate(self.fields):
            tk.Label(master, text=field, font=("Arial", 12)).grid(row=i, column=1, sticky=tk.W, padx=5, pady=2)
            entry = tk.Entry(master, font=("Arial", 12), width=10)
            entry.grid(row=i, column=2)
            self.entries[field] = entry

        self.original_label = tk.Label(master, text="原始值: ", font=("Arial", 12))
        self.original_label.grid(row=10, column=1, columnspan=2)

        self.count_label = tk.Label(master, text="共 0 项", font=("Arial", 12))
        self.count_label.grid(row=11, column=1)
# 按钮区域
        button_frame_top = tk.Frame(master)
        button_frame_top.grid(row=12, column=0, columnspan=3, pady=(20, 5))

        tk.Button(button_frame_top, text="📂 打开文件", font=("Arial", 12), command=self.load_file).pack(side=tk.LEFT, padx=5)
        tk.Button(button_frame_top, text="💾 保存文件", font=("Arial", 12), command=self.save_file).pack(side=tk.LEFT, padx=5)
        tk.Button(button_frame_top, text="❌ 删除食物", font=("Arial", 12), command=self.delete_item).pack(side=tk.LEFT, padx=5)

        button_frame_bottom = tk.Frame(master)
        button_frame_bottom.grid(row=13, column=0, columnspan=3, pady=(5, 10))

        tk.Button(button_frame_bottom, text="🆔 复制 ID", font=("Arial", 12), command=self.copy_id).pack(side=tk.LEFT, padx=5)
        tk.Button(button_frame_bottom, text="🔗 复制路径", font=("Arial", 12), command=self.copy_id_path).pack(side=tk.LEFT, padx=5)

        # 按钮
                        
    def load_file(self):
        path = filedialog.askopenfilename(filetypes=[("JSON Files", "*.json")])
        if not path:
            return
        with open(path, 'r', encoding='utf-8') as file:
            raw_data = json.load(file)

        self.file_path = path
        self.data.clear()
        self.original_data.clear()
        self.listbox.delete(0, tk.END)

        for key in sorted(raw_data.keys()):
            value = raw_data[key]
            if "foodProperties" not in value:
                continue
            props = value["foodProperties"]
            if len(props) == 2:
                original_nutrition, original_saturation = props
                new_props = [
                    original_nutrition / 2,
                    original_saturation * 10,
                    -1, 1.0, -1, -1, -1, -1, -1
                ]
                self.original_data[key] = (original_nutrition, original_saturation)
                self.data[key] = {"foodProperties": new_props}
            elif len(props) == 9:
                self.original_data[key] = (props[0] * 2, props[1] / 10)
                self.data[key] = {"foodProperties": props}
            else:
                continue
            self.listbox.insert(tk.END, key)
        self.update_list_color()
        self.count_label.config(text=f"共 {len(self.data)} 项")

    def save_current(self):
        if not self.current_key:
            return
        try:
            updated = [float(self.entries[field].get()) for field in self.fields]
        except ValueError:
            messagebox.showerror("输入错误", "请确保所有字段都是数字")
            return
        self.data[self.current_key]["foodProperties"] = updated
        self.update_list_color()

    def on_select(self, event):
        if self.current_key:
            self.save_current()

        selection = self.listbox.curselection()
        if not selection:
            return
        index = selection[0]
        key = self.listbox.get(index)
        self.current_key = key
        props = self.data[key]["foodProperties"]
        for i, field in enumerate(self.fields):
            self.entries[field].delete(0, tk.END)
            self.entries[field].insert(0, str(props[i]))
        original = self.original_data[key]
        self.original_label.config(text=f"原始值: Nutrition={original[0]}, Saturation={original[1]}")

    def save_file(self):
        if self.current_key:
            self.save_current()
        new_filename = os.path.join(os.path.dirname(self.file_path), f"edited_{os.path.basename(self.file_path)}")
        with open(new_filename, 'w', encoding='utf-8') as file:
            json.dump(self.data, file, indent=2)
        messagebox.showinfo("保存成功", f"文件已保存为 {new_filename}")

    def copy_id(self):
        if self.current_key:
            self.master.clipboard_clear()
            self.master.clipboard_append(self.current_key)
            self.master.update()

    def copy_id_path(self):
        if self.current_key and ":" in self.current_key:
            path = self.current_key.split(":", 1)[1]
            self.master.clipboard_clear()
            self.master.clipboard_append(path)
            self.master.update()

    def delete_item(self):
        if not self.current_key:
            return
        if messagebox.askyesno("确认删除", f"是否删除 {self.current_key}？"):
            del self.data[self.current_key]
            if self.current_key in self.original_data:
                del self.original_data[self.current_key]
            idx = self.listbox.get(0, tk.END).index(self.current_key)
            self.listbox.delete(idx)
            self.current_key = None
            for field in self.fields:
                self.entries[field].delete(0, tk.END)
            self.original_label.config(text="原始值: ")
            self.count_label.config(text=f"共 {len(self.data)} 项")
            self.update_list_color()

    def update_list_color(self):
        for i in range(self.listbox.size()):
            key = self.listbox.get(i)
            props = self.data[key]["foodProperties"]
            color = "green" if all(x >= 0 for x in props) else "red"
            self.listbox.itemconfig(i, fg=color)

if __name__ == "__main__":
    root = tk.Tk()
    app = FoodEditor(root)
    root.mainloop()
