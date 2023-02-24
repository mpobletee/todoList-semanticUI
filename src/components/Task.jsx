import {
  Grid,
  Label,
  Header,
  Icon,
  Button,
  Segment,
  Form,
} from "semantic-ui-react";
import React, { useState } from "react";

export default function Task(props) {
  const { task, deleteTask, updateTask } = props;
  const { idTask, taskName, categoryTask } = task;
  const [editing, setEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskName);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewTaskName(taskName);
  };

  const handleSave = () => {
    const updatedTask = { ...task, taskName: newTaskName };
    updateTask(updatedTask);
    setEditing(false);
  };

  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };
  return (
    // <Grid.Column width={8} className="task-container">
    //   <Segment>
    //     {categoryTask && (
    //       <Label color="teal" ribbon="right">
    //         {categoryTask}
    //       </Label>
    //     )}
    //     <Header as="h3" className="header-task">
    //       {taskName}
    //     </Header>
    //     {/* <Header as="h5">{idTask}</Header> */}
    //     <Grid centered columns={2}>
    //       <Grid.Column>
    //         <Button color="red" onClick={() => deleteTask(idTask)}>
    //           <Icon name="remove circle" /> Eliminar
    //         </Button>
    //         <Button color="blue" onClick={() => updateTask(idTask)}>
    //           <Icon name="edit circle" /> Modificar
    //         </Button>
    //       </Grid.Column>
    //     </Grid>
    //   </Segment>
    // </Grid.Column>

    //new content
    <Grid.Column width={8} className="task-container">
      <Segment>
        {categoryTask && (
          <Label color="teal" ribbon="right">
            {categoryTask}
          </Label>
        )}
        <Header as="h3" className="header-task">
          {editing ? (
            <Form>
              <Form.Input
                fluid
                value={newTaskName}
                onChange={handleTaskNameChange}
              />
            </Form>
          ) : (
            taskName
          )}
        </Header>
        <Grid centered>
          <Grid.Column textAlign="center">
            {editing ? (
              <Button.Group>
                <Button positive onClick={handleSave}>
                  <Icon name="checkmark" />
                </Button>
                <Button.Or />
                <Button negative onClick={handleCancel}>
                  <Icon name="cancel" />
                </Button>
              </Button.Group>
            ) : (
              <Button.Group>
                <Button color="blue" onClick={handleEdit}>
                  <Icon name="edit" /> Editar
                </Button>
                <Button color="red" onClick={() => deleteTask(idTask)}>
                  <Icon name="remove" /> Eliminar
                </Button>
              </Button.Group>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
}
