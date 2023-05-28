import Layout from "@/components/Layout";
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  DataCard,
  Dropdown,
  DropdownMulti,
  InputGroup,
  Loading,
  Modals,
  OptionType,
  RangeSlider,
  SquareLoading,
  Tabs,
  Toast,
  Toggle,
  Tooltip,
  Typography,
} from "@/components/ui";
import React, { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const StyledContainer = ({ children }: { children: JSX.Element[] }) => {
  return <Container className="w-full bg-slate-50">{children}</Container>;
};

const StyledTitle = ({ children }: { children: string }) => {
  return (
    <Card className="border-0 shadow-none">
      <Typography variant="h2">{children}</Typography>
    </Card>
  );
};

function UiPage() {
  const [count, setcount] = useState<number>(0);
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const [isToast, setisToast] = useState<boolean>(false);
  const [isToastShow, setisToastShow] = useState<boolean>(false);
  const btnRef = useRef(null);
  // const [, setDirection] = useDirection();

  // //CHANGE DIRECTION HANDLER
  // const directionHandler = () => {
  //   setDirection();
  // };
  //MODAL CONTROLLER
  const openModalStateHandler = () => {
    setmodalOpen(true);
  };

  //DROPDOWN SELECT VALUE
  const selectDataHandler = (e: OptionType): void => {
    console.log(e);
  };
  //DROPDWON MULTI SELECT HANDLER
  const selectMultiHandler = (e: OptionType[]): void => {
    console.log(e);
  };

  //TOGGLE HANDLER FOR CHECKBOX
  const changeToggleHandler = (e: boolean) => {
    console.log(e);
  };

  //CHECKBOX HANDLER TO CONTROL STATE IN PARENT
  const changeCheckboxHandler = (e: boolean) => {
    console.log(e);
  };

  //HANDLER TO GET RANGE SLIDER SELECTED VALUE
  const selectedValueHandler = (e: number) => {
    console.log(e);
  };

  return (
    <div dir="ltr" className="pb-10 mt-4 px-4" data-en="active">
      <StyledContainer>
        <StyledTitle>Actions</StyledTitle>
        <Card>
          <Typography variant="h4">Buttons</Typography>
          <div className="mt-2">
            <Button
              title="Small"
              data-testid="increment"
              role="button"
              variant="default"
              size="sm"
              // onClick={():void => setcount((prev) => prev + 1)}
              onClick={(): void => setcount((prev) => prev + 1)}
            />
            <Button
              title="Medium"
              role="button"
              data-testid="decrement"
              variant="default"
              size="md"
              onClick={(): void => setcount((prev) => prev - 1)}
              ref={btnRef}
            />
            <Button variant="default" size="lg">
              Large
            </Button>
          </div>
          <div className="mt-2">
            <Button size="sm" variant="default">
              Default
            </Button>
            <Button size="sm" variant="success">
              success
            </Button>
            <Button size="sm" variant="danger">
              danger
            </Button>
            <Button size="sm" variant="info">
              info
            </Button>
            <Button size="sm" variant="warning">
              warning
            </Button>
          </div>
          <div className="mt-2">
            {" "}
            <Button size="sm" variant="outline_default">
              outline_Default
            </Button>
            <Button size="sm" variant="outline_success">
              outline_success
            </Button>
            <Button size="sm" variant="outline_danger">
              outline_danger
            </Button>
            <Button size="sm" variant="outline_info">
              outline_info
            </Button>
            <Button size="sm" variant="outline_warning">
              outline_warning
            </Button>
          </div>
          {/* <p data-testid="countValue">{count}</p> */}
        </Card>
        <Card>
          <Typography variant="h4">Dropwdown(Single/Multi)</Typography>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Dropdown options={optionList} onSelect={selectDataHandler} />
          </div>
          <DropdownMulti options={optionList} onSelect={selectMultiHandler} />
        </Card>

        <Card>
          <Typography variant="h4">Modal</Typography>
          <div style={{ marginTop: "1rem" }}></div>
          <Button onClick={openModalStateHandler} size="md" variant="default">
            Open Modal
          </Button>
        </Card>
        <Card>
          <Typography variant="h4">Toast</Typography>
          <div style={{ marginTop: "1rem" }}></div>
          <Button size="md" variant="default" onClick={() => setisToast(true)}>
            Show Toast
          </Button>
        </Card>
      </StyledContainer>

      <StyledContainer>
        <StyledTitle>Data Display</StyledTitle>
        <Card>
          <Typography variant="h4">Typography</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Typography variant="h1">Test Typography h1</Typography>
          <Typography variant="h2">Test Typography h2</Typography>
          <Typography variant="h3">Test Typography h3</Typography>
          <Typography variant="h4">Test Typography h4</Typography>
          <Typography variant="h5">Test Typography h5</Typography>
          <Typography variant="h6">Test Typography h6</Typography>
          <Typography variant="p">Test Typography p</Typography>
          <Typography variant="small">Test Typography Span</Typography>
        </Card>
        <Card>
          <Typography variant="h4">Alert</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Typography variant="small" className="mt-2 mb-1 ">
            Success Alert
          </Typography>
          <Alert variant="success" title="Your purchase has been confirmed!" />
          <Typography variant="small" className="mt-2 mb-1">
            Danger Alert
          </Typography>
          <Alert variant="danger" title="Error! Task failed successfully." />
          <Typography variant="small" className="mt-2 mb-1">
            Info Alert
          </Typography>
          <Alert variant="info" title="New software update available." />
          <Typography variant="small" className="mt-2 mb-1">
            Warning Alert
          </Typography>
          <Alert variant="warning" title="Warning: Invalid email address!" />
          <Typography variant="small" className="mt-2 mb-1">
            Default Alert
          </Typography>
          <Alert title="Default: Noting Special" />
        </Card>
        <Card>
          <Typography variant="h4">Text Colors</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Typography variant="p" colorVariant="default">
            p element with default Variant
          </Typography>
          <Typography variant="p" colorVariant="success">
            p element with success Variant
          </Typography>
          <Typography variant="p" colorVariant="danger">
            p element with danger Variant
          </Typography>
          <Typography variant="p" colorVariant="info">
            p element with info Variant
          </Typography>
          <Typography variant="p" colorVariant="warning">
            p element with warning Variant
          </Typography>
        </Card>
        <Card>
          <Typography variant="h4">Badge</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Badge text="default" />
          <Badge text="success" variant="success" />
          <Badge text="danger" variant="danger" />
          <Badge text="info" variant="info" />
          <Badge text="warning" variant="warning" />
        </Card>
        <Card>
          <Typography variant="h4">Tooltip</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Tooltip label="tooltip" position="bottom">
            <Typography>Tooltip Bottom</Typography>
          </Tooltip>
          <Tooltip label="tooltip" position="top">
            <Typography>Tooltip Top</Typography>
          </Tooltip>
        </Card>
        <Card>
          <Typography variant="h4">Loadings</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Loading />
          <SquareLoading />
        </Card>
        <Card>
          <Typography variant="h4">Content Card</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <div style={{ width: "320px" }}>
            <DataCard
              content="You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more."
              title="Title"
              imageUrl="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg"
            />
          </div>
        </Card>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>Navigation</StyledTitle>
        <Card>
          <Typography variant="h4">Accordion(Sidebar)</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Accordion data={accordionData} />
        </Card>
        <Card>
          <Typography variant="h4">Tabs</Typography>
          <div style={{ marginBottom: "1rem" }}></div>
          <Tabs tabsValue={tabsItem} variant="info" />
        </Card>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>Form Display</StyledTitle>
        <Card>
          <Typography variant="h4">InputGroup</Typography>{" "}
          <div style={{ marginTop: "1rem" }}></div>
          <InputGroup label="Title" name="input-name" />
          <InputGroup label="Username" name="input-name-2" />
        </Card>
        <Card>
          <Typography variant="h4">Checkbox</Typography>{" "}
          <div style={{ marginTop: "1rem", display: "flex" }}>
            <Toggle
              onToggle={changeToggleHandler}
              isChecked={true}
              variant="default"
            />
            <Toggle
              onToggle={changeToggleHandler}
              isChecked={true}
              variant="danger"
            />
            <Toggle
              onToggle={changeToggleHandler}
              isChecked={true}
              variant="info"
            />
            <Toggle
              onToggle={changeToggleHandler}
              isChecked={true}
              variant="warning"
            />
            <Toggle
              onToggle={changeToggleHandler}
              isChecked={true}
              variant="success"
            />
          </div>
        </Card>
        <Card>
          <Typography variant="h4">Radio</Typography>{" "}
          <div style={{ marginTop: "1rem", display: "flex" }}>
            <Checkbox
              onToggle={changeCheckboxHandler}
              isChecked={true}
              variant="default"
            />
            <Checkbox
              onToggle={changeCheckboxHandler}
              isChecked={true}
              variant="danger"
            />
            <Checkbox
              onToggle={changeCheckboxHandler}
              isChecked={true}
              variant="info"
            />
            <Checkbox
              onToggle={changeCheckboxHandler}
              isChecked={true}
              variant="warning"
            />
            <Checkbox
              onToggle={changeCheckboxHandler}
              isChecked={true}
              variant="success"
            />
          </div>
        </Card>
        <Card>
          <Typography variant="h4">Range Slider</Typography>{" "}
          <div style={{ marginTop: "1rem", display: "flex" }}>
            <RangeSlider
              initialValue={50}
              minValue={20}
              maxValue={352}
              selectedValue={selectedValueHandler}
            />
          </div>
        </Card>
      </StyledContainer>
      <StyledContainer>
        <Card className="border-0 shadow-none">
          <Typography variant="h2">Github</Typography>
        </Card>

        <Card>
          <Typography variant="h4">Library</Typography>
          <a href="https://github.com/FarNys/design-lib" target="_blank">
            <AiFillGithub className="text-3xl" />
          </a>
          <Typography variant="h4" className="mt-2">
            Test + Webpage
          </Typography>
          <a href="https://github.com/FarNys/ui-lib-test" target="_blank">
            <AiFillGithub className="text-3xl" />
          </a>
        </Card>
      </StyledContainer>

      {/* <Card>
        This is <LinkText to="/todo">Link</LinkText> Example
      </Card> */}

      {/* <Card>
        <Checkbox
          onToggle={changeCheckboxHandler}
          isChecked={true}
          variant="warning"
        />
      </Card> */}
      {/* <Card>
        <Button
          // onClick={() => setshowToastPortal(true)}
          onClick={() =>
            toastCreator("<div><h1>H1 IS HERE</h1></div>", "success")
          }
          size="sm"
          variant="default"
          title="Portal Toast"
        />
      </Card> */}

      {/* <Card>
        <Carousel carouselData={carouselData} />
      </Card> */}

      <Toast
        toastText="Toast Info Theme"
        showToast={isToast}
        setshowToast={setisToast}
        variant="info"
      />
      <Toast
        toastText="Toast Danger Theme"
        showToast={isToastShow}
        setshowToast={setisToastShow}
        variant="danger"
      />
      {/* <ToastPortal
        toastText="This is For Test"
        showToastPortal={showToastPortal}
        setshowToastPortal={setshowToastPortal}
      /> */}
      <Modals setisOpren={setmodalOpen} isOpen={modalOpen} title="Modal Header">
        <Typography variant="p">Do you want to exit?</Typography>
        <div className="flex w-full justify-end">
          <Button size="sm" variant="info" onClick={() => setmodalOpen(false)}>
            Yes
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => setmodalOpen(false)}
          >
            No
          </Button>
        </div>
      </Modals>
    </div>
  );
}

export default UiPage;

UiPage.getLayout = (page: React.ReactElement) => {
  return (
    <Layout
      props={{
        title: "کتابحانه myreact-ui-lib",
        description:
          "کتابخانه توسعه داده شده با typescript و tailwindcss شامل کامپوننت های مورد نیاز برای ساخت اپلیکیشن",
        keywords:
          "react, nextjs, typescript, tailwindcss, materialui, frontend, front end, web, web developer, frontend web developer, javascript, ui library, myreact-ui-lib",
      }}
    >
      {page}
    </Layout>
  );
};

const tabsItem = [
  {
    title: "TAB-1",
    id: "1",
    content: (
      <div>
        <h6>THIS IS First Item</h6>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate ducimus numquam perferendis fuga minus id molestiae
          quibusdam sapiente quam.
        </div>
      </div>
    ),
  },
  {
    title: "TAB-2",
    id: "2",
    content: (
      <div>
        <h6>This Is Second Item</h6>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate ducimus numquam perferendis fuga minus id molestiae
          quibusdam sapiente quam.
        </div>
      </div>
    ),
  },
  {
    title: "TAB-3",
    id: "3",
    content: (
      <div>
        <h6>This Is Third Item</h6>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate ducimus numquam perferendis fuga minus id molestiae
          quibusdam sapiente quam.
        </div>
      </div>
    ),
  },
];

const optionList = [
  {
    label: "L-One",
    value: "Label One",
  },
  {
    label: "L-Two",
    value: "Label Two",
  },
  {
    label: "Mixer",
    value: "Label 3",
  },
  {
    label: "TaBLING",
    value: "Label 4",
  },
  {
    label: "Revol",
    value: "Label 5",
  },
  {
    label: "Kickso",
    value: "Label 6",
  },
  {
    label: "VeloNe",
    value: "Label 7",
  },
  {
    label: "Brand",
    value: "Label 8",
  },
  {
    label: "Brand-9",
    value: "Label 9",
  },
  {
    label: "Brand-10",
    value: "Label 10",
  },
  {
    label: "Brand-11",
    value: "Label 11",
  },
];

const accordionData = [
  {
    title: "Parent-1",
    children: [
      {
        title: "childrensSz-1",
      },
      {
        title: "child-2",
      },
    ],
  },
  {
    title: "Parent-2",
    children: [
      {
        title: "child-2-1",
      },
    ],
  },
  {
    title: "Parent-3",
    children: [
      {
        title: "child-3-1",
      },
      {
        title: "child-3-2",
      },
    ],
  },
];
