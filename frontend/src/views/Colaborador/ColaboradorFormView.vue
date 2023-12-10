<template>
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{this.colaboradorId ? 'Editar' : 'Novo'}} colaborador</h1>
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
                <label for="inputStatus">Cargo</label>
                <select id="inputStatus" value="" class="form-control custom-select" v-model="this.form.cargo_id">
                  <option v-for="cargo in this.cargos" :value=cargo.id>{{ cargo.nome }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputName">CPF/CNPJ</label>
                <input type="text"  v-mask="['###.###.###-##', '##.###.###/####-##']" v-model="this.form.cpf_cnpj" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Telefone</label>
                <input type="text"  v-mask="['(##) ####-####', '(##) #####-####']" v-model="this.form.telefone" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Email</label>
                <input type="email"  v-model="this.form.email" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Rua</label>
                <input type="text"  v-model="this.form.rua" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Bairro</label>
                <input type="text"  v-model="this.form.bairro" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Numero</label>
                <input type="number"  v-model="this.form.numero" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Cidade</label>
                <input type="text"  v-model="this.form.cidade" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">CEP</label>
                <input type="text"  v-mask="'#####-###'" v-model="this.form.cep" class="form-control">
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
  name: 'ColaboradorFormView',
  props: ['colaboradorId'],
  data(){
    return {
      form: {
        id: 0,
        nome: "",
        cargo_id: 1,
        cpf_cnpj: "",
        telefone: "",
        email: "",
        rua: "",
        bairro: "",
        numero: null,
        cidade: "",
        cep: ""
      },
      cargos: [],
    }
  },
  methods: {
      async salvar()
      {

        if(
          this.form.nome != "" &&
          this.form.cpf_cnpj != "" &&
          this.form.telefone != "" &&
          this.form.email != "" &&
          this.form.rua != "" &&
          this.form.bairro != "" &&
          this.form.numero != null &&
          this.form.cidade != "" &&
          this.form.cep != ""
        )
        {
          if(!this.colaboradorId) {
            await this.$api.post('/colaborador/add', {id: this.form.id, nome: this.form.nome, cpf_cnpj: this.form.cpf_cnpj, cargo_id: this.form.cargo_id, telefone: this.form.telefone, email: this.form.email, rua: this.form.rua, bairro: this.form.bairro, numero: this.form.numero, cidade: this.form.cidade, cep: this.form.cep}).then(response => {
              this.$swal.fire({
                  title: "Colaborador adicionado!",
                  icon: "success"
                });
              });
              this.form.nome = "";
              this.form.cpf_cnpj = "";
              this.form.telefone = "";
              this.form.email = "";
              this.form.rua = "";
              this.form.bairro = "";
              this.form.numero = "";
              this.form.cep = "";
            }
            else {
              await this.$api.post('/colaborador/update', {id: this.form.id, nome: this.form.nome, cpf_cnpj: this.form.cpf_cnpj, cargo_id: this.form.cargo_id, telefone: this.form.telefone, email: this.form.email, rua: this.form.rua, bairro: this.form.bairro, numero: this.form.numero, cidade: this.form.cidade, cep: this.form.cep}).then(response => {
              this.$swal.fire({
                  title: "Colaborador atualizado!",
                  icon: "success"
                });
              });
            }
          }
          else {
            this.$swal.fire({
                title: "Preencha todos os campos",
              });
          }
          
      }
  },
  async mounted() {

    console.log(this.colaboradorId)
    if(this.colaboradorId)
    {
      await this.$api.get('/colaborador/get', { params: {id: this.colaboradorId, } }).then(response => {
          this.form.id = this.colaboradorId;
          this.form.nome = response.data.nome;
          this.form.cpf_cnpj = response.data.cpf_cnpj;
          this.form.cargo_id = response.data.cargo_id;
          this.form.telefone = response.data.telefone;
          this.form.email = response.data.email;
          this.form.rua = response.data.rua;
          this.form.bairro = response.data.bairro;
          this.form.numero = response.data.numero;
          this.form.cidade = response.data.cidade;
          this.form.cep = response.data.cep;
          });
    }
    await this.$api.get('cargo/getAll').then(response => {
        this.cargos = response.data;
      });
  }
}
</script>