export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favoritos: []

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'remove_favorito':
        return {
          ...store,
          favoritos: store.favoritos.filter((item) => item !== action.payload)
        }; 

      case 'add_favorito':
        return {
          ...store,
          favoritos: [...store.favoritos, action.payload]
        };
        
      default:
      throw Error('Unknown action.');
  }
}

export const misFavoritos = (dispatch, item, store) => {
  if (store.favoritos.includes(item)) {
    dispatch({ type: 'remove_favorito', payload: item });
  } else {
    dispatch({ type: 'add_favorito', payload: item });
  }
}
