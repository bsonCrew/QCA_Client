import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';

import styled from '@emotion/styled';

import data from '../../file.json';

const StyledAutocomplete = styled(Autocomplete)((props) => {
  return {
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      color: 'white',
      transform: 'translate(34px, 20px) scale(1);',
    },
    '& .MuiAutocomplete-inputRoot': {
      color: 'white',

      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-kind':
        {
          // Default left padding is 6px
          paddingLeft: 26,
        },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: props.format ? 'green' : 'red',
      },
      width: 'max(40vw,20rem)',
      marginTop: '2px',
    },
  };
});

const SearchWrapper = styled(`div`)({
  // margin: "10vh 0 0 0",
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const CheckBoxWrapper = styled.div({
  display: 'flex',
  width: '20%',
  minWidth: '320px',
  padding: '4px 12px 4px 4px',
  borderRadius: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const AlertWrapper = styled.div({
  width: '100%',
  height: '6vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledCheckBox = styled(Checkbox)({
  color: 'white',
  '&.Mui-checked': {
    color: 'red',
  },
});

const AlertWithCollapse = ({ alertOpen, setAlertOpen }) => {
  React.useEffect(() => {
    let timer = setTimeout(() => setAlertOpen(false), 5000);

    return () => {
      if (alertOpen) setAlertOpen(false);
      clearTimeout(timer);
    };
  }, [setAlertOpen, alertOpen]);

  return (
    <AlertWrapper>
      <Collapse in={alertOpen}>
        <Alert
          severity='error'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          주소 형식은 올바른 주소 형식을 포함해야 합니다. (http:// 또는 https://
          를 포함)
        </Alert>
      </Collapse>
    </AlertWrapper>
  );
};

export default function SearchBar({ setTargetWebsite }) {
  React.useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  const [input, setInput] = React.useState(' ');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [requestNewVal, setRequestNewVal] = React.useState(false);

  const navigate = useNavigate();

  const AutoCompleteOptions = [
    ...data.websites,
    ...data.websites.map((websiteObj) => {
      return {
        label: websiteObj.homepage,
        homepage: websiteObj.label,
      };
    }),
  ];

  const checkIsInputRightFormat = (url) => {
    const regex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regex.test(url)) {
      return url;
    } else {
      const targetWebsiteHomepage = data.websites.find(
        (websiteObj) => websiteObj.label === url
      );
      if (targetWebsiteHomepage) return targetWebsiteHomepage.homepage;
      else return false;
    }
  };

  const adjustTargetWebsite = (url) => {
    while (url.at(-1) === '/') url = url.slice(0, -1);
    return url;
  };

  const handleInputChange = (e, inputVal) => {
    data.websites.find((websiteObj) => {
      if (websiteObj.homepage === inputVal) {
        return setTargetWebsite(websiteObj.homepage);
      } else if (websiteObj.label === inputVal) {
        return websiteObj.label;
      } else return false;
    });

    setInput(inputVal);
  };

  const handleSubmit = () => {
    let targetWebsite = checkIsInputRightFormat(input);

    if (targetWebsite) {
      navigate('/dashboard', {
        state: {
          targetWebsite: adjustTargetWebsite(targetWebsite),
          requestNewVal: requestNewVal,
        },
      });
    } else {
      // alert("Please enter a valid URL");
      setAlertOpen(true);
    }
  };

  const handleTabCompletion = () => {};

  const keyDownHandler = (e) => {
    // console.info("User pressed: ", e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
      <AlertWithCollapse alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      <SearchWrapper>
        <StyledAutocomplete
          inputValue={input}
          onInputChange={(e, value) => handleInputChange(e, value)}
          noOptionsText='입력한 링크로 검사를 수행합니다.'
          isOptionEqualToValue={(option, value) => option !== null}
          disablePortal
          autoHighlight
          id='search-bar'
          options={AutoCompleteOptions}
          autoSelect={true}
          size='large'
          renderOption={(props, option) => (
            <div component='li' {...props}>
              <div className='mr-2 w-full flex justify-between'>
                <div>{option.label}</div>
                <div>{option.homepage}</div>
              </div>
            </div>
          )}
          renderInput={(params) => (
            <TextField
              sx={{
                '& label': { paddingLeft: (theme) => theme.spacing(2) },
                '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                '& fieldset': {
                  paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: '20px',
                },
              }}
              {...params}
              label='기관명'
              autoFocus={true}
            />
          )}
        />
        <CheckBoxWrapper>
          <StyledCheckBox
            checked={requestNewVal}
            onChange={() => setRequestNewVal(!requestNewVal)}
            {...label}
          />
          검사를 새로 수행합니다.
        </CheckBoxWrapper>
      </SearchWrapper>
    </>
  );
}
