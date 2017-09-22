<template>
  <div class="container">
   <h1>vue & vuex 2.0 Todo List example</h1>
   <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="輸入待辦事項"
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="button" @click="actionAddTodo">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </div>
         <!-- 左右兩個欄位分別存放 todo / done -->
    <div class="row">
     <div class="col-md-6">
      <h2>Todo List:</h2>
     <ol>
        <!--
            因為需要切換更新模式，可是這個值不需要紀錄在 vuex 裡面
            所以包裝成一個 component 利用裡面封閉的 data 去紀錄，
            這 component 只需要接收父層傳遞 todo object 既可。
          -->
         <todoItem v-for="(item, index) in todoList" :item="item" />
     </ol>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ol >
          <li v-for="(item, index) in doneList">
            <!-- <label>
              <input 
                type="checkbox"
               :checked="item.done"
                @change="toggleTodo( item.key )">
               {{item.key}} - {{ item.content }}
            </label> -->
            <custom-checkbox :item="item" @toggleTodo="toggleTodo" />
            
          </li>
        </ol>
      </div>
    </div>
    <!-- end row -->
     <div class="row">
      <div class="col-md-6"><pre>get Count & Todo: {{ getCountandTodo }}</pre></div>
      <div class="col-md-6"><pre>get all state: {{ getAllstate }}</pre></div>
    </div>
  </div>
</template>

<script>
 /* eslint-disable */

import {mapActions,mapGetters} from 'vuex'
import todoItem from '../components/todo-item.vue';
import customCheckbox from '../components/customCheckbox.vue';
export default {
    components:{
      todoItem,
      customCheckbox
    },
    data () {
      return {
        newTodo: '',
        check: false
      }
    },
    computed: mapGetters({
        // 使用取 list 的函式，將資料存在 todos
        todos: 'getTodos',
        todoList: 'getTodo',
        doneList: 'getDone',
        getAllstate: 'getAllstate',
        getCountandTodo: 'getCountandTodo'
    }),
    methods: {
      ...mapActions([   
         //  方法一、先引入 
         //'addTodo',  
         'toggleTodo',
         'deleteTodo', 
      ]),
      actionAddTodo (){
        if( this.newTodo === '' ){
          return;
            }
        // 方法一、使用
        // this.addTodo( this.newTodo );

        // 這邊示範第二種方法，不需要先引入 action 可以直接呼叫（調用）。
        // 使用 this.$store.dispatch( action(String), value );
       this.$store.dispatch('addTodo', this.newTodo);
         // 清除 data 中 input 的 value
        this.newTodo= '';
      }
      
    }
}
</script>
<style></style>