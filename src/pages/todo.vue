<template>
  <q-page class="bg-red-3 column">
    <q-list separator bordered>
      <q-item v-for="task in tasks" :key="task.title" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" val="teal" color="dark" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          title: "qwe",
          done: false,
        },
        {
          title: "asd",
          done: true,
        },
        {
          title: "zxc",
          done: false,
        },
      ],
    };
  },
};
</script>
