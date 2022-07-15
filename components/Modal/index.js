import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import cruz from '../../assets/cruz.svg';

const CustomModal = (props) => {

    const { modalVisible, itemSelected, handleDeleteItem, closeModal } = props;

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <View
                            style={styles.modalHeader}>
                            <TouchableOpacity
                                onPress={() => closeModal()} >
                                <Image
                                    source={cruz}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text>
                            Modal
                        </Text>
                    </View>
                    <View stlye={styles.modalMessage}>
                        <Text>
                            ¿Desea Borrar?
                        </Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>
                            {itemSelected.value}
                        </Text>
                    </View>
                    <View style={styles.modalBtn}>
                        <Button onPress={() => handleDeleteItem(itemSelected.id)} title='Confirmar' />
                        <Button onPress={() => closeModal()} title='Cancelar' />
                    </View>
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1,1,1,0.5)',
    },
    modalHeader: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    closeIcon: {
        width: 30,
        height: 30,
    },
    modalView: {
        backgroundColor: '#414240',
        width: '80%',
        heigt: '60%',
        borderRadius: 20,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    modalTitle: {
        color: 'white',
        fontSize: 20,
    },
    modalMessage: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    modalItem: {
        fontSize: 30,
    },
    modalBtn: {
        flexDirection: 'row'
    }



})

export default CustomModal