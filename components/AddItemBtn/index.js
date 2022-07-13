import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const AddItemBtn = (props) => {

    const { textItem, handleChangeItem, addItem } = props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Escriba aquí su tarea"
                style={styles.textInput}
                value={textItem}
                onChangeText={handleChangeItem} />
            <Pressable
                style={styles.addBtn}
                onPress={addItem}
                disabled={textItem.length < 1 ? true : false}
            >
                <Text> Agregar</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    textInput: {

    },
    addBtn: {


    }
})

export default AddItemBtn