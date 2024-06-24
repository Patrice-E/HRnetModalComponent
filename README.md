# hrnetvalidatemodal

This is a modal component for React written in TypeScript.

## Installation

```js
npm install @epatrice/hrnetmodalcomponent
```

## Usage

```js
import Modal from '@epatrice/hrnetmodalcomponent'

export default MyComponent() {

...
  <Modal>
    ...
  </Modal>
...
}
```

### Required parameters

There are 3 required parameters:

- isOpen : a boolean value to set if modal should be shown or not
- onConfirm : a function that defines what happens when user clic on the "Confirm" button
- onCancel : a function that defines what happens when user clic on the "Cancel" button (generaly should do nothing exept closing modal)

```js
import { useState } from 'react';
import Modal from '@epatrice/hrnetmodalcomponent'

export default MyComponent() {
  const [open, setOpen] = useState(false)
  const [content, useContent] = useState('')

...
  <Modal isOpen={true or false} onConfirm={() => {}} onCancel={() => {}}>
    {content}
  </Modal>
...
}
```

### optional parameter

There is an optional parameter called `title`, a string that appears as a title for the modal

```js
import { useState } from 'react';
import Modal from '@epatrice/hrnetmodalcomponent'

export default MyComponent() {
  const [open, setOpen] = useState(false)
  const [content, useContent] = useState('')

...
  <Modal isOpen={open} onConfirm={() => {}} onCancel={() => {}} title="Do you want to confirm ?">
    ...
  </Modal>
...
}
```
