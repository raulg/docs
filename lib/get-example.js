import spec from '@zeit/openapi'
import path from './path'

export default function getExample(apiPath, method = 'get') {
  return JSON.stringify(
    path(
      spec,
      `paths.${apiPath}.${method}.responses.200.content.application/json.schema.example`
    ),
    undefined,
    2
  )
}
