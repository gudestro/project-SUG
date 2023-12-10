<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Empresas Executora</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Empresas</li>
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
          <h3 class="card-title">Empresas Executora</h3>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th style="width: 1%">
                          #
                      </th>
                      <th >
                          ID
                      </th>
                      <th>
                          Nome
                      </th>
                      <th>
                          Responsavel
                      </th>
                      <th>
                          Contato
                      </th>
                      <th>
                          CNPJ
                      </th>
                      <th >
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="empresa in empresas" :key="empresa.id">
                      <td>
                          #
                      </td>
                      <td>
                          {{empresa.id}}
                      </td>
                      
                      <td >
                          {{empresa.nome}}
                      </td>
                      <td >
                          {{empresa.nome_responsavel}}
                      </td>
                      <td >
                          {{empresa.contato_responsavel}}
                      </td>
                      <td >
                          {{empresa.cnpj}}
                      </td>
                      <td class="project-actions text-right">
                          
                          <button type="button" class="btn btn-info btn-sm" @click="editar(empresa.id)">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </button>
                          <button type="button" class="btn btn-danger btn-sm" @click="excluir(empresa.id)">
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
  name: 'EmpresaExecutoraIndexView',
  data(){
    return {
      empresas: [],
    }
  },
  methods: {
    excluir(id) {
      this.$swal.fire({
        title: "Tem certeza que deseja excluir essa empresa executora?",
        text: "Não será possível reverter essa ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$api.delete('empresaexecutora/delete', { data: { id: id } }).then(response => {
              this.getEmpresas();
          });
        }
      });
      
    },
    editar(id) {
      const propKey = 'empresaId';
      const propValue = id;
      this.$router.push({
        name: 'empresaForm',
        params: {
          [propKey]: propValue
        }
      })
      },
    async getEmpresas() {
      await this.$api.get('empresaexecutora/getAll').then(response => {
        this.empresas = response.data;
      });
    }
  },
  beforeMount() {
    this.getEmpresas();
  }
}
</script>