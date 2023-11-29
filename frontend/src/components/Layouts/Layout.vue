<template>
    <div class="wrapper">





<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <img src="dist/img/logog.jpg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">SUG</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Cargos
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link to="/cargo/index" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listar</p>
              </router-link>
              
            </li>
            <li class="nav-item">
              <router-link to="/cargo/form" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Adicionar Novo</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Colaborador
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link to="/colaborador/index" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listar</p>
              </router-link>
              
            </li>
            <li class="nav-item">
              <router-link to="/colaborador/form" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Adicionar Novo</p>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item menu-open">
          <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Empresa Executora
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
                <router-link to="/empresaexecutora/index" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listar</p>
              </router-link>
              
            </li>
            <li class="nav-item">
              <router-link to="/empresaexecutora/form" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Adicionar Novo</p>
              </router-link>
            </li>
          </ul>
        </li>
        
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>



<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
  <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->

<div class="content-wrapper">
    <slot></slot>

</div>

</div>
<!-- ./wrapper -->
    
  </template>

<script>


export default {
  name: 'Layout',
}
</script>
