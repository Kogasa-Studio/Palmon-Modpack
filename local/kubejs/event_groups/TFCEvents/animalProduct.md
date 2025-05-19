# TFCEvents.animalProduct

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: AnimalProductEventJS (third-party)

```
This event is fired whenever a TFC cow is milked or sheep is sheared.
Cancelling this event prevents the default behaviour, which is controlled
by the entity's implementation
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| getAnimal |  |  | Entity | ✘ |
| getPlayer |  |  | Player | ✘ |
| getTool |  |  | ItemStack | ✘ |
| getAnimalProperties |  |  | TFCAnimalProperties | ✘ |
| getUses |  |  | int | ✘ |
| isItemProduct |  |  | boolean | ✘ |
| getFluidProduct |  |  | FluidStackJS | ✘ |
| setItemProduct | ItemStack |  | void | ✘ |
| setUses | int |  | void | ✘ |
| getItemProduct |  |  | ItemStack | ✘ |
| setFluidProduct | FluidStackJS |  | void | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `Entity getAnimal()`
```
Returns the animal the product comes from
```

- `ItemStack getTool()`
```
Returns the 'too' used to get a product, either a bucket or shears
```

- `TFCAnimalProperties getAnimalProperties()`
```
Returns TFC animal properties of the animal
```

- `int getUses()`
```
How much 'wear' the animal will take from the event
```

- `boolean isItemProduct()`
```
Returns true if the event's product is an item and not a fluid
```

- `FluidStackJS getFluidProduct()`
```
Returns the fluid product of the event, may be empty if the product is an item
```

- `void setItemProduct(ItemStack var0)`

  Parameters:
  - var0: ItemStack

```
Sets the item product, attempting to use this on an event originally producing a fluid will void the product
```

- `void setUses(int var0)`

  Parameters:
  - var0: int

```
Sets how much 'wear' the animal will take from the event
```

- `ItemStack getItemProduct()`
```
Returns the item product of the event, may be empty if the product is a fluid
```

- `void setFluidProduct(FluidStackJS var0)`

  Parameters:
  - var0: FluidStackJS

```
Sets the fluid product, attempting to use this on an event originally producing an item will void the product
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
TFCEvents.animalProduct((event) => {
	// This space (un)intentionally left blank
});
```

