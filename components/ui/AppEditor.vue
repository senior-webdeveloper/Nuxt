<template>
  <div v-if="editor">
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .setParagraph()
          .run()
      "
      :className="editor.isActive('paragraph') ? 'primary' : 'secondary'"
    >
      paragraph
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 1 })
          .run()
      "
      :className="
        editor.isActive('heading', { level: 1 }) ? 'primary' : 'secondary'
      "
    >
      h1
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 2 })
          .run()
      "
      :className="
        editor.isActive('heading', { level: 2 }) ? 'primary' : 'secondary'
      "
    >
      h2
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleHeading({ level: 3 })
          .run()
      "
      :className="
        editor.isActive('heading', { level: 3 }) ? 'primary' : 'secondary'
      "
    >
      h3
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleBold()
          .run()
      "
      :className="editor.isActive('bold') ? 'primary' : 'secondary'"
    >
      bold
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleItalic()
          .run()
      "
      :className="editor.isActive('italic') ? 'primary' : 'secondary'"
    >
      italic
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleStrike()
          .run()
      "
      :className="editor.isActive('strike') ? 'primary' : 'secondary'"
    >
      strike
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleBulletList()
          .run()
      "
      :className="editor.isActive('bulletList') ? 'primary' : 'secondary'"
    >
      bullet list
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .toggleOrderedList()
          .run()
      "
      :className="editor.isActive('orderedList') ? 'primary' : 'secondary'"
    >
      ordered list
    </UiAppButton>
    <UiAppButton
      @click="setLink"
      :className="editor.isActive('link') ? 'primary' : 'secondary'"
    >
      link
    </UiAppButton>
    <UiAppButton
      @click="editor.chain().focus().toggleUnderline().run()"
      :className="editor.isActive('underline') ? 'primary' : 'secondary'"
    >
        underline
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .undo()
          .run()
      "
      className="primary"
    >
      undo
    </UiAppButton>
    <UiAppButton
      @click="
        editor
          .chain()
          .focus()
          .redo()
          .run()
      "
      className="primary"
    >
      redo
    </UiAppButton>
    <EditorContent :editor="editor" />
  </div>
</template>

<script>
import { EditorContent, Editor } from "@tiptap/vue-2";
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

import StarterKit from "@tiptap/starter-kit";
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    extensions: {
      type: Array,
      required: false,
      default: [StarterKit]
    }
  },
  components: {
    Editor,
    EditorContent
  },
  data: () => ({
    editor: null
  }),
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [...this.extensions, Underline, Link],
      onUpdate: () => {
        this.$emit("input", this.editor.getHTML());
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.value, false);
    }
  },
  methods: {
    setLink() {
      const url = window.prompt('URL')

      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },
  }
};
</script>
