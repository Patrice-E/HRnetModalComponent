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
  const [content, setContent] = useState('')

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
  const [content, setContent] = useState('')

...
  <Modal isOpen={open} onConfirm={() => {}} onCancel={() => {}} title="Do you want to confirm ?">
    ...
  </Modal>
...
}
```

### Prendre en compte le style

By default, no style is applied. To change that, you just have to add one line :

```js
import '@epatrice/hrnetmodalcomponent/styles';
```

At a final state, you should have something like that :

```js
import { useState } from 'react';
import Modal from '@epatrice/hrnetmodalcomponent'
import '@epatrice/hrnetmodalcomponent/styles';

export default MyComponent() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')

  const onConfim = () => {
    // Some stuff to do when user confirms
    setOpen(false)
  }
  const onCancel = () => {
    // Some other stuff to do when user cancels
    setOpenModal(false)
  }

  return (
    <>
      <div>
        // some stuff with something that can change the content and open the modal
      </div>
      <Modal
        isOpen={open}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title="Do you want to confirm ?" // optional line
      >
        {content}
      </Modal>
    </>
  )
}
```
