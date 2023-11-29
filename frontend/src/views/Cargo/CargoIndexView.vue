<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Cargos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Cargos</li>
              <li class="breadcrumb-item active">Listar</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Cargos</h3>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th style="width: 1%">
                          #
                      </th>
                      <th style="width: 20%">
                          ID
                      </th>
                      <th>
                          Nome
                      </th>
                      <th style="width: 20%">
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="cargo in cargos" :key="cargo.id">
                      <td>
                          #
                      </td>
                      <td>
                          {{cargo.id}}
                      </td>
                      
                      <td class="project_progress">
                          {{cargo.nome}}
                      </td>
                      <td class="project-actions text-right">
                          
                          <button type="button" class="btn btn-info btn-sm" @click="editar(cargo.id)">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </button>
                          <button type="button" class="btn btn-danger btn-sm" @click="excluir(cargo.id)">
                              <i class="fas fa-trash">
                              </i>
                              Excluir
                          </button>
                      </td>
                  </tr>
                 
              </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

    </section>
</template>
<script>
export default {
  name: 'CargoIndexView',
  data(){
    return {
      cargos: [],
    }
  },
  methods: {
    excluir(id) {
      this.$swal.fire({
        title: "Tem certeza que deseja excluir esse cargo?",
        text: "Não será possível reverter essa ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$api.delete('cargo/delete', { data: { id: id } }).then(response => {
              this.getCargos();
          });
        }
      });
      
    },
    editar(id) {
      const propKey = 'cargoId';
      const propValue = id;
      this.$router.push({
        name: 'cargoForm',
        params: {
          [propKey]: propValue
        }
      })
      },
    async getCargos() {
      await this.$api.get('cargo/getAll').then(response => {
        this.cargos = response.data;
      });
    }
  },
  beforeMount() {
    this.getCargos();
  }
}
</script>