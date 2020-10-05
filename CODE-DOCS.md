# error-message

**Mixins:** ScopedElementsMixin

## Properties

| Property  | Attribute | Type     | Default |
|-----------|-----------|----------|---------|
| `message` | `message` | `string` | ""      |


# food-truck

**Mixins:** ScopedElementsMixin

## Properties

| Property          | Attribute         | Type     | Default |
|-------------------|-------------------|----------|---------|
| `address`         | `address`         | `string` |         |
| `applicant`       | `applicant`       | `string` |         |
| `data`            | `data`            | `object` | {}      |
| `distance`        | `distance`        | `number` |         |
| `latitude`        | `latitude`        | `number` |         |
| `longitude`       | `longitude`       | `number` |         |
| `originLatitude`  | `originLatitude`  | `number` | ""      |
| `originLongitude` | `originLongitude` | `number` | ""      |

## Methods

| Method              | Type         |
|---------------------|--------------|
| `getDirectionsLink` | `(): string` |


# search-component

**Mixins:** ScopedElementsMixin

## Properties

| Property    | Attribute   | Type     | Default |
|-------------|-------------|----------|---------|
| `errors`    | `errors`    | `array`  | []      |
| `latitude`  | `latitude`  | `number` | ""      |
| `longitude` | `longitude` | `number` | ""      |
| `trucks`    | `trucks`    | `array`  | []      |

## Methods

| Method                 | Type       |
|------------------------|------------|
| `getNearestFoodTrucks` | `(): void` |


# food-truck

**Mixins:** ScopedElementsMixin

## Properties

| Property          | Attribute         | Type     | Default |
|-------------------|-------------------|----------|---------|
| `address`         | `address`         | `string` |         |
| `applicant`       | `applicant`       | `string` |         |
| `data`            | `data`            | `object` | {}      |
| `distance`        | `distance`        | `number` |         |
| `latitude`        | `latitude`        | `number` |         |
| `longitude`       | `longitude`       | `number` |         |
| `originLatitude`  | `originLatitude`  | `number` | ""      |
| `originLongitude` | `originLongitude` | `number` | ""      |

## Methods

| Method              | Type         |
|---------------------|--------------|
| `getDirectionsLink` | `(): string` |


# search-component

**Mixins:** ScopedElementsMixin

## Properties

| Property    | Attribute   | Type     | Default |
|-------------|-------------|----------|---------|
| `errors`    | `errors`    | `array`  | []      |
| `latitude`  | `latitude`  | `number` | ""      |
| `longitude` | `longitude` | `number` | ""      |
| `trucks`    | `trucks`    | `array`  | []      |

## Methods

| Method                 | Type       |
|------------------------|------------|
| `getNearestFoodTrucks` | `(): void` |
