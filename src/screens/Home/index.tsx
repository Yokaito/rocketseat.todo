import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

import { Task } from '../../components/Task';
import { ListEmpty } from '../../components/ListEmpty';

type TaskProps = {
  id: string;
  message: string;
  concluded: boolean;
};

export const Home = () => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState<string>('');
  const [task, setTask] = useState<TaskProps[]>([]);

  const handleTaskAdd = () => {
    if (input === '') return;

    const data = {
      id: String(new Date().getTime()),
      message: input,
      concluded: false,
    };

    setTask((oldState) => [data, ...oldState]);
    setInput('');
  };

  const handleTaskConclude = (id: string) => {
    const newTask = task.map((item) => {
      if (item.id === id) {
        item.concluded = !item.concluded;
      }
      return item;
    });

    setTask(newTask);
  };

  const handleTaskDelete = (id: string) => {
    const newTask = task.filter((item) => item.id !== id);

    setTask(newTask);
  };

  const countConcluded = task.filter((item) => item.concluded).length;
  const countCreated = task.length;

  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              { borderColor: '#5E60CE', borderWidth: focus ? 1 : 0 },
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={input}
            onChangeText={setInput}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <TouchableOpacity onPress={handleTaskAdd}>
            <View style={styles.button}>
              <AntDesign name="pluscircleo" size={16} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <View style={styles.listHeaderTextWrapper}>
              <Text style={styles.textCreated}>Criadas</Text>
              <View style={styles.textWrapperNumber}>
                <Text style={styles.textNumber}>{countCreated}</Text>
              </View>
            </View>
            <View style={styles.listHeaderTextWrapper}>
              <Text style={styles.textConcluded}>Concluídas</Text>
              <View style={styles.textWrapperNumber}>
                <Text style={styles.textNumber}>{countConcluded}</Text>
              </View>
            </View>
          </View>
          <View>
            <FlatList
              data={task}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Task
                  {...item}
                  onConclude={handleTaskConclude}
                  onRemove={handleTaskDelete}
                />
              )}
              ListEmptyComponent={<ListEmpty />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
