import React from 'react';

import ItemDetails from './item-details';
import NewItem from './new-item';
import EditItem from './edit-item';
import { userService, authenticationService, ItemService } from '@/_services';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    //binding methods.
    this.onSelect = this.onSelect.bind(this);
    this.getItem = this.getItem.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onCreateItem = this.onCreateItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    //creating monk data
    this.items = [
      { link: 1, name: "test1", summary: "Summary Test 1", year: "2001", country: "in", price: "1000", description: "Desc 1" },
      { link: 2, name: "test2", summary: "Summary Test 2", year: "2002", country: "uk", price: "2000", description: "Desc 2" },
      { link: 3, name: "test3", summary: "Summary Test 3", year: "2003", country: "cz", price: "3000", description: "Desc 3" },
    ];
    //setting initial state.
    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null,
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: null
    };
  }

  /**
   * Method for selecting the item.
   * @param {*} itemLink 
   */
  onSelect(itemLink) {
    console.log("itemLink", itemLink)
    this.clearState();
    let item = this.getItem(itemLink);
    if (item) {
      this.setState({
        showDetails: true,
        selectedItem: item
      });
    }
  }
  /**
   * Getting exact link from the items.
   * @param {*} itemLink 
   */
  getItem(itemLink) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].link === itemLink) {
        return this.items[i];
      }
    }
    return null;
  }

  /**
   * Clearing the states.
   */
  clearState() {
    this.setState({
      showDetails: false,
      selectedItem: null,
      editItem: false,
      newItem: null
    });
  }
  /**
   * Method is called when cancelled button is clicked and the state is set.
   */
  onCancel() {
    this.clearState();
  }
  /**
   * Method is called when button is clicked.
   */
  onNewItem() {
    this.clearState();
    this.setState({
      newItem: true
    });
  }
  /**
   * Method is called when edit button is clicked.
   */

  onEditItem() {
    this.setState({
      showDetails: false,
      editItem: true,
      newItem: null
    });
  }
  /**
   * Method is called when clicked cancel on edit page.
   */
  onCancelEdit() {
    this.setState({
      showDetails: true,
      editItem: false,
      newItem: null
    });
  }
  /**
   * Method is called when updating an item.
   * @param {*} item 
   */
  onUpdateItem(item) {
    this.clearState();
    this.itemService.updateItem(item).then(item => {
      this.getItems();
    }
    );
  }
  /**
   * Method is called  when creating an item.
   * @param {*} newItem 
   */
  onCreateItem(newItem) {
    this.clearState();
    this.itemService.createItem(newItem).then(item => {
      this.getItems();
    }
    );
  }
  /**
   * Method is called when deleting an item.
   * @param {*} itemLink 
   */
  onDeleteItem(itemLink) {
    this.clearState();
    this.itemService.deleteItem(itemLink).then(res => {
      this.getItems();
    }
    );
  }
  /**
   * React life cycle method is called and user is being set in the state.
   */
  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));

  }

  render() {
    const { currentUser, users } = this.state;
    const showDetails = this.state.showDetails;
    const selectedItem = this.state.selectedItem;
    const newItem = this.state.newItem;
    const editItem = this.state.editItem;
    const listItems = this.items.map((item) =>
      <li key={item.link} onClick={() => this.onSelect(item.link)}>
        <span className="item-name">{item.name}</span> |  {item.summary}
      </li>
    );
    console.log("item service", this.items)
    return (
      <div>
        <h1>Hi {currentUser.firstName}!</h1>

        <h3>Welocme to Home Page:</h3>
        {users &&
          <ul>
            {users.map(user =>
              <li key={user.id}>{user.firstName} {user.lastName}</li>
            )}
          </ul>
        }
        <ul>
          {listItems}
        </ul>
        <br />
        <button type="button" name="button" onClick={() => this.onNewItem()}>New Item</button>
        <br />
        {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel} />}
        {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem} onDelete={this.onDeleteItem} />}
        {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} />}
      </div>
    );
  }
}

export { HomePage };