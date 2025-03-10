# TFCEvents.registerClimateModel

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: RegisterClimateModelEventJS (third-party)

```
Used to register/create new climate models which can be used during climate model selection
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| newVec2 | float, float |  | Vec2 | ✘ |
| registerClimateModel | ResourceLocation, Consumer<KubeJSClimateModel> |  | void | ✘ |
| registerAdvancedClimateModel | ResourceLocation, Consumer<AdvancedKubeJSClimateModel> |  | void | ✘ |
| getDefaultAverageRainfallCallback |  |  | LevelPos2FloatCallback | ✘ |
| getDefaultAirFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| getDefaultWaterFogCallback |  |  | LevelPosLong2FloatCallback | ✘ |
| getDefaultWindVectorCallback |  |  | WindVectorCallback | ✘ |
| getDefaultAverageTemperatureCallback |  |  | LevelPos2FloatCallback | ✘ |
| getDefaultCurrentTemperatureCallback |  |  | TemperatureCallback | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |


### Documented members:

- `Vec2 newVec2(float x, float z)`

  Parameters:
  - x: float- The x component
  - z: float- The y component

```
Creates a new Vec2 with the given x and y values, used for creating custom wind vectors in your models
```

- `void registerClimateModel(ResourceLocation name, Consumer<KubeJSClimateModel> model)`

  Parameters:
  - name: ResourceLocation- The name of the climate model
  - model: Consumer<KubeJSClimateModel>- A consumer for a KubeJSClimateModel

```
Creates a new climate model with the given name and properties
```

- `void registerAdvancedClimateModel(ResourceLocation name, Consumer<AdvancedKubeJSClimateModel> model)`

  Parameters:
  - name: ResourceLocation- The name of the climate model
  - model: Consumer<AdvancedKubeJSClimateModel>- A consumer for an AdvancedKubeJSClimateModel, which has access to the onWorldLoad and onChunkLoad methods

```
Creates a new climate model with the given name and properties
```

- `LevelPos2FloatCallback getDefaultAverageRainfallCallback()`
```
Returns the callback version of TFC's average rainfall calculation
```

- `LevelPosLong2FloatCallback getDefaultAirFogCallback()`
```
Returns the callback version of TFC's air fog calculation
```

- `LevelPosLong2FloatCallback getDefaultWaterFogCallback()`
```
Returns the callback version of TFC's water fog calculation
```

- `WindVectorCallback getDefaultWindVectorCallback()`
```
Returns the callback version of TFC's wind vector calculation
```

- `LevelPos2FloatCallback getDefaultAverageTemperatureCallback()`
```
Returns the callback version of TFC's overworld average temperature calculation
```

- `TemperatureCallback getDefaultCurrentTemperatureCallback()`
```
Returns the callback version of TFC's overworld current temperature calculation
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
TFCEvents.registerClimateModel((event) => {
	// This space (un)intentionally left blank
});
```

