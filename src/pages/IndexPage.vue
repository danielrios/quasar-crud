<template>
  <q-page padding>
    <q-table
      style="max-height: 1000px"
      flat
      bordered
      :rows="users"
      :columns="columns"
      color="primary"
      :rows-per-page-options="[10, 25, 50, 100]"
      row-key="id_user"
      :loading="loading"
      virtual-scroll
      v-model:pagination="pagination"
    >
      <template v-slot:top>
        <span class="text-h5">Usuários</span>
        <q-space />
        <q-btn color="primary" label="Novo" :to="{ name: 'formPost' }" />
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:body="props">
        <q-tr>
          <q-td
            v-for="col in props.cols"
            :props="props"
            :auto-width="col.autoWidth"
            :key="col.name"
            :class="`row-${col.name}`"
            style="white-space: normal"
          >
            <row v-if="col.name === 'act'">
              <q-btn flat round icon="mode_edit" color="green"></q-btn>
            </row>
            <span v-else-if="col.name !== 'act'">{{ col.value }}</span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { DataService } from "../Services/DataService";

export default {
  name: "IndexPage",
  data() {
    return {
      users: [],
      columns: [
        {
          name: "name",
          label: "Nome",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true,
        },
        {
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          align: "center",
          sortable: true,
          format: (val) => (val == 1 ? "Ativo" : "Inativo"),
        },
        {
          name: "createdAt",
          label: "Criado em",
          field: "created_at",
          sortable: true,
          format: (val) => this.formatDate(val),
          align: "center",
        },
        {
          name: "act",
          label: "Alterar",
          align: "center",
        },
      ],
      loading: true,
    };
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const data = await DataService.getAll();
        this.users = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(str) {
      if (str.trim() == "") return "";

      return moment(str).format("DD/MM/YYYY HH:mm");
    },
  },
};
</script>
