<template>
  <q-page class="bg-red-3 column">
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-grey-6': task.done }"
        v-for="(task, index) in tasks"
        :key="task.title"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
            color="dark"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            dense
            flat
            round
            color="dark"
            icon="delete"
          />
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
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: $dark;
  }
}
</style>
