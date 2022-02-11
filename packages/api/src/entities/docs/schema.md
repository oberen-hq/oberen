# Schemas for Oberen database:

The following schemas are used to store specific sets of data using 'type-graphql- and postgresql.

## User

- **id**: `number`
- **username**: `string`
- **email**: `string`
- **password**: `string`
- **roles**: `RoleTypes[]`
- **profile**: `Profile`
- **sessions**: `Session[]`
- **errors**: (optional): `Error[]`
- **organizations** (optional): `Organization[]`
- **jobs** (optional): `Job[]`
- **tasks** (optional): `Task[]`
- **chats** (optional): `Chat[]`
- **messages** (optional): `Message[]`
- **friends** (optional): `User[]`
- **posts**: (optional): `Post[]`
- **createdAt**: `Date`
- **updatedAt**: `Date`
