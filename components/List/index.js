import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const List = (props) => {
    const { itemList, handleModal, handleCompleteItem, itemSelected } = props;

    return (
        <FlatList
            data={itemList}
            renderItem={data => (
                <View style={styles.itemContainer}>
                    <Text style={[styles.item, {
                        textDecorationLine: data.item.completed ? 'line-through' : null,
                        color: data.item.completed ? 'green' : 'red'
                    }]}>{data.item.value}</Text>
                    <TouchableOpacity onPress={() => handleModal(data.item.id)} style={styles.itemBtn}>
                        <Text>
                            Borrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCompleteItem(itemSelected.id)} style={styles.itemBtn} >
                        <Text>
                            Completar
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#e6e8e5',
        borderColor: '#b4b6b3',
        borderRadius: 15,
        marginTop: '15%',
        height: 65,

    },




})

export default List;