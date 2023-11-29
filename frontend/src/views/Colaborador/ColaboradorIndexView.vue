<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Colaboradores</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Colaborador</li>
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
          <h3 class="card-title">Colaboradores</h3>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th>
                          #
                      </th>
                      <th >
                          ID
                      </th>
                      <th>
                          Nome
                      </th>
                      <th>
                          CPF/CNPJ
                      </th>
                      <th>
                          Telefone
                      </th>
                      <th>
                          Email
                      </th>
                      <th>
                          Rua
                      </th>
                      <th>
                          Bairro
                      </th>
                      <th>
                          Numero
                      </th>
                      <th>
                          Cidade
                      </th>
                      <th>
                          CEP
                      </th>
                      <th >
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="colaborador in colaboradores" :key="colaborador.id">
                      <td>
                          #
                      </td>
                      <td>
                          {{colaborador.id}}
                      </td>
                      
                      <td >
                          {{colaborador.nome}}
                      </td>
                      <td >
                          {{colaborador.cpf_cnpj}}
                      </td>
                      <td >
                          {{colaborador.telefone}}
                      </td>
                      <td >
                          {{colaborador.email}}
                      </td>
                      <td >
                          {{colaborador.rua}}
                      </td>
                      <td >
                          {{colaborador.bairro}}
                      </td>
                      <td >
                          {{colaborador.numero}}
                      </td>
                      <td >
                          {{colaborador.cidade}}
                      </td>
                      <td >
                          {{colaborador.cep}}
                      </td>
                      <td class="project-actions text-right">
                          
                          <button type="button" class="btn btn-info btn-sm" @click="editar(colaborador.id)">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </button>
                          <button type="button" class="btn btn-danger btn-sm" @click="excluir(colaborador.id)">
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
  name: 'ColaboradorIndexView',
  data(){
    return {
      colaboradores: [],
    }
  },
  methods: {
    excluir(id) {
      this.$swal.fire({
        title: "Tem certeza que deseja excluir esse colaborador?",
        text: "Não será possível reverter essa ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$api.delete('colaborador/delete', { data: { id: id } }).then(response => {
              this.getColaboradores();
          });
        }
      });
      
    },
    editar(id) {
      const propKey = 'colaboradorId';
      const propValue = id;
      this.$router.push({
        name: 'colaboradorForm',
        params: {
          [propKey]: propValue
        }
      })
      },
    async getColaboradores() {
      await this.$api.get('colaborador/getAll').then(response => {
        this.colaboradores = response.data;
      });
    }
  },
  beforeMount() {
    this.getColaboradores();
  }
}
</script>