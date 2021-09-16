(self.webpackChunk=self.webpackChunk||[]).push([[63684],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,u=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>m,default:()=>c});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"fragment-container",title:"Fragment Container",original_id:"fragment-container"},p=void 0,s={unversionedId:"fragment-container",id:"version-v1.6.1/fragment-container",isDocsHomePage:!1,title:"Fragment Container",description:"A Fragment Container is a higher-order component that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a specification of the data needed for rendering, and then Relay will guarantee that this data is available before rendering occurs.",source:"@site/versioned_docs/version-v1.6.1/Modern-FragmentContainer.md",sourceDirName:".",slug:"/fragment-container",permalink:"/docs/v1.6.1/fragment-container",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.1/Modern-FragmentContainer.md",version:"v1.6.1",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1631824626,formattedLastUpdatedAt:"9/16/2021",frontMatter:{id:"fragment-container",title:"Fragment Container",original_id:"fragment-container"},sidebar:"version-v1.6.1/docs",previous:{title:"QueryRenderer",permalink:"/docs/v1.6.1/query-renderer"},next:{title:"Refetch Container",permalink:"/docs/v1.6.1/refetch-container"}},m=[{value:"<code>createFragmentContainer</code>",id:"createfragmentcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"Example",id:"example",children:[{value:"React Component",id:"react-component",children:[]},{value:"Data Dependencies With GraphQL",id:"data-dependencies-with-graphql",children:[]},{value:"Defining Containers",id:"defining-containers",children:[]}]},{value:"Container Composition",id:"container-composition",children:[{value:"Composing Views",id:"composing-views",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]},{value:"Passing Arguments to a Fragment",id:"passing-arguments-to-a-fragment",children:[]},{value:"Calling Component Instance Methods",id:"calling-component-instance-methods",children:[]}]},{value:"Rendering Containers",id:"rendering-containers",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Fragment Container is a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order component")," that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a ",(0,o.kt)("em",{parentName:"p"},"specification")," of the data needed for rendering, and then Relay will guarantee that this data is available ",(0,o.kt)("em",{parentName:"p"},"before")," rendering occurs."),(0,o.kt)("p",null,"Table of Contents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#createfragmentcontainer"},(0,o.kt)("inlineCode",{parentName:"a"},"createFragmentContainer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#container-composition"},"Container Composition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rendering-containers"},"Rendering Containers"))),(0,o.kt)("h2",{id:"createfragmentcontainer"},(0,o.kt)("inlineCode",{parentName:"h2"},"createFragmentContainer")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createFragmentContainer")," has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"createFragmentContainer(\n  component: ReactComponentClass,\n  fragmentSpec: GraphQLTaggedNode | {[string]: GraphQLTaggedNode},\n): ReactComponentClass;\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"component"),": The React Component ",(0,o.kt)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. The required data will be available on the component as props that match the shape of the provided fragment. ",(0,o.kt)("inlineCode",{parentName:"li"},"fragmentSpec")," can be one of 2 things:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragment. If the fragment uses the name convention ",(0,o.kt)("inlineCode",{parentName:"li"},"<FileName><...>_<propName>"),", the fragment's data will be available to the Component as a prop with the given ",(0,o.kt)("inlineCode",{parentName:"li"},"<propName>"),".\nIf the fragment name doesn't specify a prop name, the data will be available as a ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," prop."),(0,o.kt)("li",{parentName:"ul"},"An object whose keys are prop names and values are ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop in the resulting Component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note:")," To enable ",(0,o.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",(0,o.kt)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),".")))),(0,o.kt)("h3",{id:"available-props"},"Available Props"),(0,o.kt)("p",null,"The Component resulting from ",(0,o.kt)("inlineCode",{parentName:"p"},"createFragmentContainer")," will receive the following ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ntype Props = {\n  relay: {\n    environment: Environment,\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"relay"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment"),": The current ",(0,o.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment"))))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To start, let's build the plain React version of a hypothetical ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoItem />")," component that displays the text and completion status of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo"),"."),(0,o.kt)("h3",{id:"react-component"},"React Component"),(0,o.kt)("p",null,"Here's a basic implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoItem />")," that ignores styling in order to highlight the functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// TodoItem.js\nclass TodoItem extends React.Component {\n  render() {\n    // Expects the `item` prop to have the following shape:\n    // {\n    //   item: {\n    //     text,\n    //     isComplete\n    //   }\n    // }\n    const item = this.props.item;\n    return (\n      <View>\n        <Checkbox checked={item.isComplete} />\n        <Text>{item.text}</Text>\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("h3",{id:"data-dependencies-with-graphql"},"Data Dependencies With GraphQL"),(0,o.kt)("p",null,"In Relay, data dependencies are described using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/graphql"},"GraphQL"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoItem />"),", the dependency can be expressed as follows. Note that this exactly matches the shape that the component expected for the ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  # This fragment only applies to objects of type 'Todo'.\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`\n\n")),(0,o.kt)("h3",{id:"defining-containers"},"Defining Containers"),(0,o.kt)("p",null,"Given the plain React component and a GraphQL fragment, we can now define a Fragment Container to specify this component's data requirements. Let's look at the code first and then see what's happening:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// TodoItem.js\nimport {createFragmentContainer, graphql} from 'react-relay';\n\nclass TodoItem extends React.Component // as above\n\n// Export a *new* React component that wraps the original `<TodoItem>`.\nexport default createFragmentContainer(TodoItem, {\n  // For each of the props that depend on server data, we define a corresponding\n  // key in this object. Here, the component expects server data to populate the\n  // `item` prop, so we'll specify the fragment from above at the `item` key.\n  item: graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n});\n")),(0,o.kt)("p",null,"Relay will infer the prop name from the fragment name according to the fragment naming convention ",(0,o.kt)("inlineCode",{parentName:"p"},"<FileName><...>_<propName>"),". The example below is equivalent to the one above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createFragmentContainer(\n  TodoItem,\n  graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n);\n")),(0,o.kt)("p",null,"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"_<propName>")," suffix, the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," prop name will be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class TodoItem extends React.Component {\n  render() {\n    const item = this.props.data;\n    // ...\n  }\n}\n\nexport default createFragmentContainer(\n  TodoItem,\n  graphql`\n    fragment TodoItem on Todo {\n      text\n      isComplete\n    }\n  `,\n);\n")),(0,o.kt)("h2",{id:"container-composition"},"Container Composition"),(0,o.kt)("p",null,"React and Relay support creating arbitrarily complex applications through ",(0,o.kt)("em",{parentName:"p"},"composition"),". Larger components can be created by composing smaller components, helping us to create modular, robust applications."),(0,o.kt)("p",null,"Let's explore how this works via a ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoList />")," component that composes the ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoItem />")," we defined above."),(0,o.kt)("h3",{id:"composing-views"},"Composing Views"),(0,o.kt)("p",null,"View composition is ",(0,o.kt)("em",{parentName:"p"},"exactly")," what you're used to \u2014 Relay containers are just standard React components. Here's the ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoList />")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class TodoList extends React.Component {\n  render() {\n    // Expects a `list` with a string `title`, as well as the information\n    // for the `<TodoItem>`s (we'll get that next).\n    const list = this.props.list;\n    // It works just like a React component, because it is one!\n    return (\n      <View>\n        <Text>{list.title}</Text>\n        {list.todoItems.map(item => <TodoItem item={item} />)}\n      </View>\n    );\n  }\n}\n")),(0,o.kt)("h3",{id:"composing-fragments"},"Composing Fragments"),(0,o.kt)("p",null,"Fragment composition works similarly \u2014 a parent container's fragment composes the fragment for each of its children. In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoList />")," needs to fetch information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo"),"s that are required by ",(0,o.kt)("inlineCode",{parentName:"p"},"<TodoItem />"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class TodoList extends React.Component // as above\n\nexport default createFragmentContainer(\n  TodoList,\n  // This `_list` fragment name suffix corresponds to the prop named `list` that\n  // is expected to be populated with server data by the `<TodoList>` component.\n  graphql`\n    fragment TodoList_list on TodoList {\n      # Specify any fields required by '<TodoList>' itself.\n      title\n      # Include a reference to the fragment from the child component.\n      todoItems {\n        ...TodoItem_item\n      }\n    }\n  `,\n);\n")),(0,o.kt)("p",null,"Note that when composing fragments, the type of the composed fragment must match the field on the parent in which it is embedded. For example, it wouldn't make sense to embed a fragment of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Story")," into a parent's field of type ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),". Relay and GraphQL will provide helpful error messages if you get this wrong (and if they aren't helpful, let us know!)."),(0,o.kt)("h3",{id:"passing-arguments-to-a-fragment"},"Passing Arguments to a Fragment"),(0,o.kt)("h4",{id:"argumentdefinitions"},(0,o.kt)("inlineCode",{parentName:"h4"},"@argumentDefinitions")),(0,o.kt)("p",null,"When defining a fragment, you can use the ",(0,o.kt)("a",{parentName:"p",href:"./graphql-in-relay#argumentdefinitions"},(0,o.kt)("inlineCode",{parentName:"a"},"@argumentDefinitions"))," directive to specify any arguments, with potentially default values, that the fragment expects."),(0,o.kt)("p",null,"For example, let's redefine our ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList_list")," fragment to take some arguments using ",(0,o.kt)("inlineCode",{parentName:"p"},"@argumentDefinitions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'fragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n')),(0,o.kt)("p",null,"Any arguments defined inside ",(0,o.kt)("inlineCode",{parentName:"p"},"@argumentDefinitions")," will be local variables available inside the fragment's scope. However, a fragment can also reference global variables that were defined in the root query."),(0,o.kt)("h4",{id:"arguments-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"@arguments")),(0,o.kt)("p",null,"In order to pass arguments to a fragment that has ",(0,o.kt)("inlineCode",{parentName:"p"},"@argumentDefinitions"),", you need to use the ",(0,o.kt)("a",{parentName:"p",href:"./graphql-in-relay#arguments"},(0,o.kt)("inlineCode",{parentName:"a"},"@arguments"))," directive."),(0,o.kt)("p",null,"Following our ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList_list")," example, we would pass arguments to the fragment like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query TodoListQuery($count: Int, $userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n")),(0,o.kt)("h3",{id:"calling-component-instance-methods"},"Calling Component Instance Methods"),(0,o.kt)("p",null,"React component classes may have methods, often accessed via ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html"},"refs"),".\nSince Relay composes these component instances in a container, you need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"componentRef")," prop to access them:"),(0,o.kt)("p",null,"Consider an input with a server-defined placeholder text and an imperative method to focus the input node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createFragmentContainer(\n  class TodoInput extends React.Component {\n    focus() {\n      this.input.focus();\n    }\n\n    render() {\n      return <input\n        ref={node => { this.input = node; }}\n        placeholder={this.props.data.suggestedNextTitle}\n      />;\n    }\n  },\n  graphql`\n    fragment TodoInput on TodoList {\n      suggestedNextTitle\n    }\n  `,\n);\n")),(0,o.kt)("p",null,"To call this method on the underlying component, first provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"componentRef")," function to the Relay container. This differs from providing a ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," function which would provide a reference to the Relay container itself, not the underlying React Component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default createFragmentContainer(\n  class TodoListView extends React.Component {\n    render() {\n      return <div onClick={() => this.input.focus()}>\n        <TodoInput\n          data={this.props.data}\n          componentRef={ref => { this.input = ref; }}\n        />\n      </div>;\n    }\n  },\n  graphql`\n    fragment TodoListView on TodoList {\n      ...TodoInput\n    }\n  `,\n);\n")),(0,o.kt)("h2",{id:"rendering-containers"},"Rendering Containers"),(0,o.kt)("p",null,"As we've learned, Relay fragment containers only declare data requirements as GraphQL fragments. In order to actually fetch and render the specified data, we need to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," component to render a root query and any fragment containers included within. Please refer to our ",(0,o.kt)("a",{parentName:"p",href:"./query-renderer"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryRenderer"))," docs for more details."))}c.isMDXComponent=!0}}]);