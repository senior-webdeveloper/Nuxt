<template>
  <div>
    <div>
      <main>
        <UiAppHeader
          title="CMS Homepage"
          subtitle=""
          body=""
        />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ["auth"],
}
</script>

