import { PartialType } from '@nestjs/mapped-types'

import { CreateAuthorDto } from './create-author.dto'

export class UpdateUserDto extends PartialType(CreateAuthorDto) { }
