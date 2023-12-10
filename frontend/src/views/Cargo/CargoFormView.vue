<template>
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{this.cargoId ? 'Editar' : 'Novo'}} cargo</h1>
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
  name: 'CargoFormView',
  props: ['cargoId'],
  data(){
    return {
      form: {
        id: 0,
        nome: null 
      },
    }
  },
  methods: {
      async salvar()
      {
        if(this.form.nome && this.form.nome != "")
        {
          if(!this.cargoId) {
            await this.$api.post('/cargo/add', {id: this.form.id, nome: this.form.nome}).then(response => {
              this.$swal.fire({
                  title: "Cargo adicionado!",
                  icon: "success"
                });
              });
              this.form.nome = "";
            }
            else {
              await this.$api.post('/cargo/update', {id: this.form.id, nome: this.form.nome}).then(response => {
              this.$swal.fire({
                  title: "Cargo atualizado!",
                  icon: "success"
                });
              });
            }
          }
          else {
            this.$swal.fire({
                title: "O nome é inválido",
              });
          }
          
      }
  },
  async mounted() {

    console.log(this.cargoId)
    if(this.cargoId)
    {
      await this.$api.get('/cargo/get', { params: {id: this.cargoId, } }).then(response => {
          this.form.id = this.cargoId;
          this.form.nome = response.data.nome;
          });
    }
  }
}
</script>