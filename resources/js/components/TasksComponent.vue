<template>
  <div class="notes">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

              <div class="panel">
              <div class="panel-heading">Nueva Tarea</div>
              <div class="panel-body">
                <form action="" v-on:submit.prevent="newTask()">
                  <div class="form-group">
                    <label for="">Escribir la tarea</label>
                    <input type="text" class="form-control" name="Tarea" v-model="description">
                    <button type="submit" class="btn btn-open" >Enviar</button>
                  </div>
                </form>
              </div>
            </div>

             <div class="table table table-hover table-sprite">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Descripción</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(task, index) in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td v-if="editMode"><input type="text" name="Editar Tarea" class="form-control"></td>
                    <td>
                    <td>{{ task.description }}</td>
                    
                      <button class="btn btn-edit" v-on:click="edit()" >Editar</button>
                    </td>
                    <td>
                      <button class="btn btn-delete" v-on:click="del()">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {

        data: function(){
          return {
            editMode: true,
            description: '',
            tasks: [{
              'id': 1,
              'description': 'Tareaaaaa'
            }]
          }
        },

        mounted() {
            console.log('Component mounted.')
        },
        methods: {
          newTask(){
            alert(this.description);
          },
          del(){
            console.log('entro a borrar');
          },
          edit(){
            editMode = true;
            console.log('entro a editar');
          }
        }
    }
</script>

<style lang="scss">
.panel{
  border-radius: 15px;
  background: #F0F0F0;

  .panel-heading{
    font-size: 15px;
  }
}
  .btn-open{
    margin-top: 10px;
    background:#8EE000;
    border-bottom: 5px solid green;
    border-radius: 10px;
    color:white;
    font-weight: bolder;
    &:hover{
      border-bottom: 0px solid #8EE000;
      margin-top: 15px;
      color: white;
      background:#BFF199;
    }

   }
    .btn-edit{
    background:#1CB0F6;
    border-bottom: 5px solid #1a82b9;
    border-radius: 10px;
    color:white;
    font-weight: bolder;
    &:hover{
      border-bottom: 0px solid blue;
      margin-top: 5px;
      color: white;
      background:#14D4F4;
    }
  }
    .btn-delete{
    background:#D33131;
    border-bottom: 5px solid #731919;
    border-radius: 10px;
    color:white;
    font-weight: bolder;
    &:hover{
      border-bottom: 0px solid red;
      margin-top: 5px;
      color: white;
      background:#FF9797;
    }

  }
</style>