<template>
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{this.empresaId ? 'Editar' : 'Nova'}} Empresa Executora</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Project Add</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
           
            <div class="card-body">
              <div class="form-group">
                <label for="inputName">Nome</label>
                <input type="text"  v-model="this.form.nome" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Responsavel</label>
                <input type="text"  v-model="this.form.nome_responsavel" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Contato Responsavel</label>
                <input type="text"  v-mask="['(##) ####-####', '(##) #####-####']" v-model="this.form.contato_responsavel" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">CNPJ</label>
                <input type="text" v-mask="'##.###.###/####-##'" v-model="this.form.cnpj" class="form-control">
              </div>
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        
      </div>
      <div class="row">
        <div class="col-12">
          <input type="submit" value="Salvar" @click="salvar()" class="btn btn-success float-right">
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'EmpresaExecutoraFormView',
  props: ['empresaId'],
  data(){
    return {
      form: {
        id: 0,
        nome: "",
        nome_responsavel: "",
        contato_responsavel: "",
        cnpj: ""
      },
    }
  },
  methods: {
      async salvar()
      {
        if(this.form.nome != "" && this.nome_responsavel != "" && this.contato_responsavel != "" && this.form.cnpj != "")
        {
          if(!this.empresaId) {
            await this.$api.post('/empresaexecutora/add', {id: this.form.id, nome: this.form.nome, nome_responsavel: this.form.nome_responsavel, contato_responsavel: this.form.contato_responsavel, cnpj: this.form.cnpj}).then(response => {
              this.$swal.fire({
                  title: "Empresa executora adicionada!",
                  icon: "success"
                });
              });
              this.form.nome = "";
              this.form.nome_responsavel = "";
              this.form.contato_responsavel = "";
              this.form.cnpj = "";
            }
            else {
              await this.$api.post('/empresaexecutora/update', {id: this.form.id, nome: this.form.nome, nome_responsavel: this.form.nome_responsavel, contato_responsavel: this.form.contato_responsavel, cnpj: this.form.cnpj}).then(response => {
              this.$swal.fire({
                  title: "Empresa executora atualizada!",
                  icon: "success"
                });
              });
            }
        }
        else {
          this.$swal.fire({
                title: "Preencha todos os campos!",
              });
        }  
      }
  },
  async mounted() {

    if(this.empresaId)
    {
      await this.$api.get('/empresaexecutora/get', { params: {id: this.empresaId, } }).then(response => {
            this.form.id = this.empresaId;
            this.form.nome = response.data.nome;
            this.form.nome_responsavel = response.data.nome_responsavel;
            this.form.contato_responsavel = response.data.contato_responsavel;

          });
    }
  }
}
</script>