import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const List = (props) => {
    const { itemList, handleModal, handleCompleteItem } = props;

    return (
        <FlatList
            data={itemList}
            renderItem={data => (
                <View style={styles.itemContainer}>
                    <Text style={[styles.item, {
                        textDecorationLine: data.item.completed ? 'line-through' : null,
                        color: data.item.completed ? 'green' : 'red'
                    }]}>{data.item.value}</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => handleModal(data.item.id)} style={styles.itemBtn}>
                            <Text style={styles.itemBtnText}>
                                Borrar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleCompleteItem(data.item.id)} style={styles.itemBtn} >
                            <Text style={styles.itemBtnText}>
                                Completar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#1b1b18',
        borderColor: '#b4b6b3',
        borderRadius: 15,
        marginTop: '5%',
        height: 'auto',
        marginLeft: 15,
        marginRight: 15
    },
    item: {
        marginLeft: 15,
    },
    btnContainer: {
        marginRight: 15,
    },
    itemBtn: {
        backgroundColor: '#42423e',
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemBtnText: {
        color: 'white',
    }




})

export default List;