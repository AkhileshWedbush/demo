import { Icons } from '../../../shared/GlobalStyle'

export interface LinkButtonItem {
  id: string
  name: string
  src: string
  alt: string
  category: string
}

export const LinkButtonItemList = [
  {
    id: 'Refresh',
    name: 'Refresh',
    src: Icons.Redo,
    alt: 'Refresh icon',
    category: 'default',
  },
  {
    id: 'Help',
    name: 'Help',
    src: Icons.QuestionCircle,
    alt: 'Help',
    category: 'default',
  },
  {
    id: 'Export',
    name: 'Export',
    src: Icons.FileExport,
    alt: 'Export icon',
    category: 'default',
  },
  {
    id: 'Print',
    name: 'Print',
    src: Icons.Print,
    alt: 'Print icon',
    category: 'default',
  },
  {
    id: 'Suggestions',
    name: 'Suggestions',
    src: Icons.Suggestions,
    alt: 'Suggestions icon',
    category: 'default',
  },
]
