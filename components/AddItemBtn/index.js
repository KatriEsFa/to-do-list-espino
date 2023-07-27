import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const AddItemBtn = (props) => {

    const { textItem, handleChangeItem, addItem } = props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Escriba aquí su tarea"
                style={styles.textInput}
                value={textItem}
                onChangeText={handleChangeItem}
                theme={{ colors: { text: 'black' } }}
            />
            <Pressable
                style={styles.addBtn}
                onPress={addItem}
                disabled={textItem.length < 1 ? true : false}
            >
                <Text style={styles.btnText}> Agregar</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    addBtn: {
        backgroundColor: '#42423e',
        marginLeft: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,

    },
    btnText: {
        color: 'white',

    }
})

export default AddItemBtn