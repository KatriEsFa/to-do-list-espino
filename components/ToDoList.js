//un input text
//un boton de borrar
//se agregan en un array de strings
//el array se muestra en una flat list

import { StyleSheet, View } from "react-native";

import AddItemBtn from "./AddItemBtn"
import CustomModal from "./Modal";
import List from "./List";
import { useState } from "react";

const ToDoList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [textItem, setTextItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});

    const handleDeleteItem = (id) => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id));
        setItemSelected({});
        setModalVisible(!modalVisible)
    };
    const handleChangeItem = (text) => setTextItem(text);
    const addItem = () => {
        setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false }]);
        setTextItem('')
    }

    const handleModal = (id) => {
        setItemSelected(itemList.find(e => e.id === id));
        setModalVisible(!modalVisible)
    }

    const handleCompleteItem = (id) => {
        let itemCompleted = itemList.findIndex((item) => item.id === id);
        itemList[itemCompleted].completed = true;
        setItemList([...itemList]);
        setModalVisible(!modalVisible);
    }



    return (
        <View style={styles.container}>
            <CustomModal
                modalVisible={modalVisible}
                handleDeleteItem={handleDeleteItem}
                itemSelected={itemSelected}
                handleCompleteItem={handleCompleteItem}
            />
            <AddItemBtn
                textItem={textItem}
                handleChangeItem={handleChangeItem}
                addItem={addItem}
            />
            <List
                itemList={itemList}
                handleModal={handleModal}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }


})

export default ToDoList;