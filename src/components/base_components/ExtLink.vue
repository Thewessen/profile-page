<template functional>
  <a
    :href="props.url"
    rel="noopener noreferrer"
    :target="props.blank && '_blank'">
    <slot></slot>
  </a>
</template>
