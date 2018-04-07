import { h } from 'hyperapp'

const AddItem = ({ add, input, value, placeholder }) => (    <div class='flex'>
      <input
        type="text"
        // adds to do when enter is pressed
        onkeyup={e => (e.keyCode === 13 ? add() : null)}
        // udpates what is shown in the box
        oninput={e => input({ value: e.target.value })}
        value={value}
        placeholder={placeholder}
      />
      <button onclick={add}>＋</button>
    </div>
  );

const ListItem = ({ value,id,completed,toggle,destroy }) => (<li class={completed && "completed"} id={id} key={id} onclick={e =>
      toggle(id)}>{value}<button onclick={ () => destroy(id) }>x</button></li>
    );

const view = (state, actions) => (
  <div>
    <h1><strong>Hyper</strong>List</h1>
      <AddItem add={actions.add} input={actions.input}
        value={state.input} />
      <ul id='list'>
          {state.items.map(item => (
              <ListItem
                id={item.id}
                value={item.value}
                completed={item.completed}
                toggle={actions.toggle}
                destroy={actions.destroy}
              />
            ))}
        </ul>
      <button onclick={() =>
                  actions.clearAllCompleted({
                    items: state.items
                  })
                }>Clear completed items</button>
  </div>
);

export default view;
