/* eslint-disable */

// // count
// export const getCount = state => state.count;

// // todo 
// // 修改為兩隻 getter 因 getter 不能傳值 (可以傳請告訴我..)
// // 使用 filter 過濾 item.done
// // 返回 dont list & todo list

// export const getDone = state =>{
//     return state.todos.filter((item) => {
//         return item.done;
//     });
// }

// export const getTodo = state =>{
//     return state.todos.filter((item) =>{
//         return !item.done;
//     });
// }



// get count & todo
export const getCountandTodo = state => {
    return {
      count: state.count.count,
      todo: state.todo.todos,
    }
  }
  
  // just return all state
  export const getAllstate = state => state


  // loading state 

  export const getLoading = state => state.loading;

