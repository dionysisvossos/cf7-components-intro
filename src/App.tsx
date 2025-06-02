// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
import OnlineStatus from "./components/OnlineStatus.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import Todo from "../../cf7-react-todo-app/src/components/Todo.tsx";


function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () =>
    //         clearInterval(id);
    // }, []);

  return (
    <>
        <Layout>
        {/*  <ClassComponent />*/}
        {/*  <FunctionalComponent />*/}
        {/*  <ArrowFunctionalComponent />*/}
        {/*  <ArrowFunctionalComponentWithProps*/}
        {/*      title="Is an arrow functional component with props" />*/}
        {/*  <ArrowFunctionalComponentWithPropsType*/}
        {/*      title="Is an arrow functional component with props"*/}
        {/*      description="This is a description"*/}
        {/*  />*/}
        {/*/!*<ViteIntro />*!/*/}
        {/*<ClassComponentWithState/>*/}
        {/*<FunctionalComponentWithState/>*/}
        {/*<Counter/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<CounterAdvanced/>*/}
        {/*<CounterWithCustomHook/>*/}
        {/*<CounterAdvancedWithCustomHook/>*/}
        {/*<CounterWithReducer/>*/}
        {/*<Todo/>*/}
        <OnlineStatus/>
        </Layout>
    </>
  )
}

export default App
