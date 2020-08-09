
<a name="readmemd"></a>

# id-components

Utility library for composing compound identifiers that survive url-encoding

**Note** components of compound identifiers are _lowercase_.


<a name="_librarymd"></a>


# @raydeck/id-components - v1.0.0

## Index

### Functions

* [cleanComponent](#cleancomponent)
* [decodeComponent](#decodecomponent)
* [encodeComponent](#encodecomponent)
* [isCompoundId](#iscompoundid)
* [makeCompoundId](#makecompoundid)
* [parseCompoundId](#parsecompoundid)
* [parseUri](#parseuri)
* [undefinedIfError](#undefinediferror)

## Functions

###  cleanComponent

▸ **cleanComponent**(`component`: string): *string*

*Defined in [index.ts:68](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L68)*

Clean a component for use (lower-case)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | string | component string to clean up  |

**Returns:** *string*

___

###  decodeComponent

▸ **decodeComponent**(`component`: string): *string*

*Defined in [index.ts:61](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L61)*

Decode a component previously wrapped by encodeCOmponent
(and should be the same if it was not encoded previously)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | string | string to decode  |

**Returns:** *string*

___

###  encodeComponent

▸ **encodeComponent**(`component`: string): *string*

*Defined in [index.ts:53](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L53)*

Encode a component in an un-wrappable way

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | string | string to encode  |

**Returns:** *string*

___

###  isCompoundId

▸ **isCompoundId**(`id`: string): *boolean*

*Defined in [index.ts:38](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L38)*

Determine whether the string is a compound id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | string to test  |

**Returns:** *boolean*

___

###  makeCompoundId

▸ **makeCompoundId**(`primaryId`: string, `secondaryId`: string): *string*

*Defined in [index.ts:46](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L46)*

Create a compound ID from two other ids

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`primaryId` | string | Primary id (goes first in the list) |
`secondaryId` | string | Secondary id (goes second - usually locally unique to the primary)  |

**Returns:** *string*

___

###  parseCompoundId

▸ **parseCompoundId**(`id`: string): *string[]*

*Defined in [index.ts:25](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L25)*

Parse a compound id (e.g. url-encoded and joined with slashses) into its constituent components

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string |   |

**Returns:** *string[]*

___

###  parseUri

▸ **parseUri**(`uri`: string): *string[]*

*Defined in [index.ts:75](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L75)*

Parse a URI into scheme and host components for uri-ization

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uri` | string | URI to parse  |

**Returns:** *string[]*

___

###  undefinedIfError

▸ **undefinedIfError**‹**T**›(`fnc`: function, `defaultValue`: T | undefined): *Promise‹T | undefined›*

*Defined in [index.ts:10](https://github.com/rhdeck/id-components/blob/868fa22/src/index.ts#L10)*

Check a function and return the `defaultValue` in the event it returns an error (rather than throwing)

**Type parameters:**

▪ **T**

Type of expected return

**Parameters:**

▪ **fnc**: *function*

Asynchronous (promise-returning) function

▸ (): *Promise‹T›*

▪`Default value`  **defaultValue**: *T | undefined*= undefined

Value to return in the event of an error

**Returns:** *Promise‹T | undefined›*
