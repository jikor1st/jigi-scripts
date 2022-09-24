import { useState, useRef, MouseEvent, useEffect } from 'react';
import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';

const Scontainer = styled.div<{ isPrepare: boolean }>(({ isPrepare }) => {
  return {
    position: 'relative',
    visibility: isPrepare ? 'visible' : 'hidden',
    opacity: isPrepare ? 1 : 0,
    transition: 'opacity 0.13s ease',
  };
});

const SSelectBox = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => {
  const borderColor = isOpen
    ? theme.palette.primary.main
    : theme.palette.divider.secondary;
  const color = isOpen
    ? theme.palette.primary.main
    : theme.palette.text.primary;
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '4px 6px 4px',
    borderRadius: 24,
    overflow: 'hidden',
    border: `1px solid ${borderColor}`,
    cursor: 'pointer',
    transition: 'color 0.08s linear, border 0.08s linear',
    '& .resume-selected-value': {
      color: color,
      transition: 'color 0.08s linear, border 0.08s linear',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.actions.hover,
      transition: 'opacity 0.08s linear',
      opacity: isOpen ? 0.34 : 0,
    },
  };
});

const SSelected = styled.div(({ theme }) => {
  return {
    position: 'relative',
    padding: `0 ${theme.typography.pxToRem(8)}`,
    textAlign: 'center',
    ...theme.typography.body1,
  };
});
const SSelectedValue = styled.p(({ theme }) => {
  return { color: theme.palette.text.primary };
});
const SSelectIcon = styled.span<{ isOpen: boolean }>(({ isOpen }) => {
  const rotateIsOpen = isOpen ? 180 : 0;
  return {
    transform: `rotate(${rotateIsOpen}deg)`,
  };
});
const SOptionsBox = styled.div<{ selectBoxHeight: number }>(
  ({ theme, selectBoxHeight }) => {
    const isDarkMode = theme.palette.mode === 'dark';
    return {
      position: 'absolute',
      left: 0,
      top: selectBoxHeight + 10,
      width: '100%',
      padding: '6px 0',
      border: `1px solid ${theme.palette.divider.secondary}`,
      borderRadius: 18,
      overflow: 'hidden',
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        background: theme.palette.background.paper,
        opacity: isDarkMode ? 0.75 : 1,
      },
    };
  },
);
const SOption = styled.button<{ isActive: boolean }>(({ theme, isActive }) => {
  const isDarkMode = theme.palette.mode === 'dark';

  let color = '';
  if (!isDarkMode) {
    color = isActive ? theme.palette.primary.main : theme.palette.text.primary;
  } else {
    color = isActive ? theme.palette.primary.main : theme.palette.text.primary;
  }

  return {
    position: 'relative',
    textAlign: 'left',
    width: '100%',
    borderRaidus: 12,
    ...theme.typography.body1,
    ...(isActive && {
      fontWeight: theme.typography.fontWeight.Medium,
    }),
    color: color,
    padding: `4px 8px`,
    '&:not(:last-child)': {
      marginBottom: 2,
    },
    ...(isActive && {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: '0 4px',
        width: 'calc(100% - 8px)',
        height: '100%',
        background: theme.palette.primary.light,
        borderRadius: 18,
        opacity: isDarkMode ? 0.1 : 1,
      },
    }),
  };
});
const SOptionValue = styled.p(({ theme }) => {
  return {
    position: 'relative',
    padding: `0 ${theme.typography.pxToRem(8)}`,
  };
});

type OptionsValue = string | number;

type OptionsType = { value: OptionsValue; text: OptionsValue }[];

interface SelectBoxProps {
  options: OptionsType;
  onChange?: (value: OptionsValue, e: MouseEvent) => void;
  value: OptionsValue;
}

export function SelectBox({
  value: selectedValue,
  options,
  onChange,
}: SelectBoxProps) {
  const [selectBoxEl, setSelectBoxEl] = useState<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const findIndex = options.findIndex(({ value }) => value === selectedValue);
    if (findIndex !== -1) {
      const findedValue = options[findIndex].text as string;
      setSelected(findedValue);
    }
  }, [selectedValue]);

  const selectBoxHeight = () => {
    if (!selectBoxEl) return 0;
    return selectBoxEl.getBoundingClientRect().height;
  };

  const handleClickOptions = (value: OptionsValue, e: MouseEvent) => {
    onChange && onChange(value, e);
    setIsOpen(false);
  };

  return (
    <Scontainer
      isPrepare={!!selectBoxEl}
      tabIndex={1}
      onBlur={e => {
        if (e.relatedTarget?.classList.contains('resume-option-button')) return;
        setIsOpen(false);
      }}
    >
      <SSelectBox
        isOpen={isOpen}
        onClick={() => {
          if (!selectBoxEl) return;
          setIsOpen(prev => !prev);
        }}
        ref={el => setSelectBoxEl(el)}
      >
        <SSelected>
          <SSelectedValue className="resume-selected-value">
            {selected}
          </SSelectedValue>
        </SSelected>
        <SSelectIcon isOpen={isOpen}>
          <Icon
            icon="ArrowDown"
            size={20}
            color={isOpen ? 'primary' : 'secondary'}
          />
        </SSelectIcon>
      </SSelectBox>
      {isOpen && (
        <SOptionsBox selectBoxHeight={selectBoxHeight()}>
          {options.map(({ value, text }) => (
            <SOption
              className="resume-option-button"
              isActive={selectedValue === value}
              onClick={(e: MouseEvent) => handleClickOptions(value, e)}
              role={'button'}
              key={value}
            >
              <SOptionValue>{text}</SOptionValue>
            </SOption>
          ))}
        </SOptionsBox>
      )}
    </Scontainer>
  );
}
