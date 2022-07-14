import Header from "./Header"

render() {
  return (
    <div>
      <Header />
      <TodosList todos={this.state.todos} />
    </div>
  );
}

handleChange = (id) => {
  console.log("clicked", id);
};
