import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'
import {locations} from './presentation/locations'

export default defineConfig({
  name: 'default',
  title: 'Hydrogen Test',

  projectId: '6ut6pd3v',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        preview: '/',
        previewMode: {
          // This should match the route you created earlier
          enable: '/resource/preview',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
