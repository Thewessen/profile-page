<template>
  <div class="container">
    <b-list-group>
      <b-list-group-item to="#">Home</b-list-group-item>
      <b-list-group-item to="/CTF/OverTheWire/bandit" variant="secondary">OverTheWire</b-list-group-item>
      <b-list-group-item href="/Exercism/javascript" variant="success">Exercism</b-list-group-item>
    </b-list-group>
    <ProjectBlockLayout
      title="First project"
      :languages="['es6', 'typescript', 'python']">
      This was my first project
    </ProjectBlockLayout>
  </div>
</template>

<script>
import ProjectBlockLayout from '@/components/ProjectBlockLayout'
export default {
  name: 'home',
  components: {
    ProjectBlockLayout,
  }
}
</script>
