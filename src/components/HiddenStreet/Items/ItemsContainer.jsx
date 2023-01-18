import { useState, useEffect } from "react";
import { Button, Container, Form, Input, List } from "semantic-ui-react";
import { searchItemsApi } from "../../../api/ItemApi/ItemApi";

const ItemsContainer = () => {

    const [items, setItems] = useState([{  id: 1, name: 'asdf'},{},{}]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = () => {
        searchItemsApi(searchInput).then(items => {
            setItems(items);
        });
    }
    return (
        <>
            <h1>Items</h1>
            <Form onSubmit={() => searchItems()}>
                <Form.Input label='Item Search' type='text' onChange={(e) => setSearchInput(e.target.value)} />
                <Button type='submit'>Search</Button>
            </Form>
            <List style={{height: 200 + 'px'}}>
               {
                    items.map((item) => {
                        return (
                            <List.Item key={item.id}>
                                {item.name}
                            </List.Item>
                        );
                    })
               }
            </List>
        </>
    );
}

export default ItemsContainer;