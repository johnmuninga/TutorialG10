import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Authentication } from './Tabs';

const ComponentA = () => {
    const { setForm, form, Submit } = useContext(Authentication);

    return (
        <View style={{ flex: 1, marginTop: 15, padding: 10 }}>
            <Text style={{ textAlign: "center" }}>Form</Text>
            {/* Form components here */}
            <Text style={{ marginTop: 10, marginBottom: 5 }}>Name</Text>
            <TextInput
                placeholder='Enter name...'
                value={form["name"] || ''}
                style={{ borderWidth: 1, borderColor: "gray", padding: 8, borderRadius: 5 }}
                onChangeText={text => setForm({ ...form, name: text })}
            />
            <Text style={{ marginTop: 10, marginBottom: 5 }}>Surname</Text>
            <TextInput
                placeholder='Enter Surname...'
                value={form["surname"] || ''}
                onChangeText={text => setForm({ ...form, surname: text })}
                style={{ borderWidth: 1, borderColor: "gray", padding: 8, borderRadius: 5 }}
            />
            <Text style={{ marginTop: 10, marginBottom: 5 }}>Email</Text>
            <TextInput
                placeholder='Enter Email...'
                value={form["email"] || ''}
                onChangeText={text => setForm({ ...form, email: text })}
                style={{ borderWidth: 1, borderColor: "gray", padding: 8, borderRadius: 5 }}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 10,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={Submit}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ComponentA;
