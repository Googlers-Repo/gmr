import React from "react";
import { Page, Tabbar, Toolbar, BottomToolbar, Ansi } from "@mmrl/ui";
import {
  useNativeStorage,
  useNativeProperties,
  useActivity,
  useSettings
} from "@mmrl/hooks";
import { ExpandMore, Add, Remove } from "@mui/icons-material";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Box,
  Slider,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from "@mui/material";
import BuildConfig from "@mmrl/buildconfig";
import Terminal from "@mmrl/terminal";

const scope = "mmrlini_v2";

function GeneralTab(props) {
  const [curl, setCurl] = useNativeProperties(`persist.${scope}.curl`, "/system/usr/share/mmrl/bin/curl");
  const [zip, setZip] = useNativeProperties(`persist.${scope}.zip`, "/system/usr/share/mmrl/bin/zip");
  const [unzip, setUnzip] = useNativeProperties(`persist.${scope}.unzip`, "/system/bin/unzip");

  const [extraArgsCurl, setExtraArgsCurl] = useNativeProperties(`persist.${scope}.curl.args`, "-L");
  const [extraArgsZip, setExtraArgsZip] = useNativeProperties(`persist.${scope}.zip.args`, "-r");
  const [extraArgsUnzip, setExtraArgsUnzip] = useNativeProperties(`persist.${scope}.unzip.args`, "-qq");

  const { context } = useActivity();

  return (
    <Page sx={{ p: 0 }}>
      <Card sx={{ m: 1 }}>
        <CardActionArea onClick={() => {
          context.pushPage({
            component: TerminalActivity,
            key: "Terminal",
            extra: {}
          })
        }}>
          <CardMedia
            component="img"
            height="140"
            image="https://miro.medium.com/v2/resize:fit:2000/1*ewzA98ft7vVUt6cBgY8gjw.png"
            alt="logs"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Log inside MMRLINI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can now view logs inside MMRLINI to make the bug hunt more easier. Click to try it out!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setCurl(val);
          }}
          inputLabel="Path"
          type="text"
          title="Change curl bin path"
          initialValue={curl}
        >
          <ListItemText primary="Change curl bin path" secondary={curl} />
        </ListItemDialogEditText>
        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setZip(val);
          }}
          inputLabel="Path"
          type="text"
          title="Change zip bin path"
          initialValue={zip}
        >
          <ListItemText primary="Change zip bin path" secondary={zip} />
        </ListItemDialogEditText>
        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setUnzip(val);
          }}
          inputLabel="Path"
          type="text"
          title="Change unzip bin path"
          initialValue={unzip}
        >
          <ListItemText primary="Change unzip bin path" secondary={unzip} />
        </ListItemDialogEditText>
      </List>

      <List subheader={<ListSubheader>Arguments</ListSubheader>}>
        <ListItemDialogEditText
          disabled
          onSuccess={(val) => {
            if (val) setExtraArgsCurl(val);
          }}
          inputLabel="Arguments"
          type="text"
          title="Add extra curl arguments"
          initialValue={extraArgsCurl}
        >
          <ListItemText primary="Add extra curl arguments" secondary={extraArgsCurl} />
        </ListItemDialogEditText>
        <ListItemDialogEditText
          disabled
          onSuccess={(val) => {
            if (val) setExtraArgsZip(val);
          }}
          inputLabel="Arguments"
          type="text"
          title="Add extra zip arguments"
          initialValue={extraArgsZip}
        >
          <ListItemText primary="Add extra zip arguments" secondary={extraArgsZip} />
        </ListItemDialogEditText>
        <ListItemDialogEditText
          disabled
          onSuccess={(val) => {
            if (val) setExtraArgsUnzip(val);
          }}
          inputLabel="Arguments"
          type="text"
          title="Add extra unzip arguments"
          initialValue={extraArgsUnzip}
        >
          <ListItemText primary="Add extra unzip arguments" secondary={extraArgsUnzip} />
        </ListItemDialogEditText>
      </List>

      <List subheader={<ListSubheader>Config</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Swipeable tabs" secondary="Enables swipe between tabs" />
          <Switch checked={props.swipeable} onChange={(e) => props.setSwipeable(e.target.checked)} />
        </ListItem>
      </List>

      <Divider />

      <List subheader={<ListSubheader>Project</ListSubheader>}>
        <ListItemButton onClick={() => window.open("https://github.com/DerGoogler/MMRL/issues")}>
          <ListItemText primary="Report a issue" />
        </ListItemButton>
      </List>
    </Page>
  );
}

function FaqTab() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Page sx={{ p: 1 }}>
      <Accordion disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Typography>
            Why does I need a module for installing others?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A modules offers <strong>fast and easy uodates</strong>, users also
            can make changes or made a module for their self.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Typography>Can I install GitHub Archives with MMRL?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Currently it isn's supported to install{" "}
            <strong>GitHub Archives</strong> with <strong>MMRL</strong>. It is
            planned that you can install <strong>GitHub Archives</strong> with{" "}
            <strong>MMRL</strong>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Typography>Why are the extra arguments disabled?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There is currently no valid way to pass them down to the command.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters expanded={expanded === 'panel_latest'} onChange={handleChange('panel_latest')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
        >
          <Typography>Comes more FAQs in the future?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We always add new FAQs, but this question is always the latest.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Page>
  );
}

function InstallToolsConfig() {
  const { context } = useActivity()
  const [index, setIndex] = React.useState(0)
  const [swipeable, setSwipeable] = useNativeStorage("mmrlini_swipeable", false)

  const handlePreChange = (event) => {
    if (event.index != this.state.index) {
      setIndex(event.index)
    }
  };

  const renderToolbar = () => {
    return (
      <Toolbar modifier="noshadow">
        <Toolbar.Left>
          <Toolbar.BackButton onClick={context.popPage} />
        </Toolbar.Left>
        <Toolbar.Center>MMRL Install Tools</Toolbar.Center>
      </Toolbar>
    );
  };

  const renderTabs = () => {
    return [
      {
        content: <GeneralTab swipeable={swipeable} setSwipeable={setSwipeable} />,
        tab: <Tabbar.Tab label='General' />
      },
      {
        content: <FaqTab />,
        tab: <Tabbar.Tab label='FAQ' />
      }
    ];
  }

  return (
    <Page renderToolbar={renderToolbar}>
      <Tabbar
        swipeable={swipeable}
        position='auto'
        index={index}
        onPreChange={handlePreChange}
        renderTabs={renderTabs}
      />
    </Page>
  );
}

function TerminalActivity() {
  const [fontSize, setFontSize] = useNativeStorage("mmrlini_log_terminal", 100);
  const { context } = useActivity();
  const [lines, setLines] = React.useState([]);

  const addLine = (line) => {
    setLines((lines) => [...lines, line]);
  };

  const renderToolbar = () => {
    return (
      <Toolbar>
        <Toolbar.Left>
          <Toolbar.BackButton onClick={context.popPage} />
        </Toolbar.Left>
        <Toolbar.Center>
          Logs
        </Toolbar.Center>
        {/* <Toolbar.Right>
          <Toolbar.Button icon={Save}/>
        </Toolbar.Right> */}
      </Toolbar>
    )
  }

  const handleChange = (event, newValue) => {
    setFontSize(Number(newValue));
  };

  const startLog = React.useMemo(() => {
    const envp = {
      PACKAGENAME: BuildConfig.APPLICATION_ID,
    };

    Terminal.exec({
      command: "logcat --pid=`pidof -s $PACKAGENAME` -v color",
      env: envp,
      onLine: (line) => {
        addLine(line);
      },
      onExit: (code) => { },
    });
  }, []);

  return (
    <Page
      onShow={startLog}
      renderToolbar={renderToolbar}
      modifier="noshadow"
      backgroundStyle="#000000"
      renderBottomToolbar={() => {
        return (
          <BottomToolbar sx={{ background: "none", backgroundColor: "#000000" }}>
            <Stack spacing={2} direction="row" sx={{ height: "100%", ml: 1, mr: 1 }} alignItems="center">
              <Add color="secondary" />
              <Slider
                value={fontSize}
                onChange={handleChange}
                step={10}
                marks
                min={20}
                max={200} />
              <Remove color="secondary" />
            </Stack>
          </BottomToolbar>
        )
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Stack
          style={{
            whiteSpace: "pre",
            flex: "0 0 100%",
            backgroundColor: "black",
            color: "white",
            height: "100%",
          }}
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={0}
        >
          {lines.map((line) => (
            <Box component={Ansi} sx={{
              fontSize: fontSize ? `${fontSize}%` : "none",
              ml: 1,
              mr: 1,
            }}>{line}</Box>
          ))}
        </Stack>
      </div>
    </Page>
  );
}

export default InstallToolsConfig;
