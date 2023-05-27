import React, { useCallback, useEffect, useRef, useState } from "react"
import { OptionType } from "./Dropdown"
import { Typography } from "../Typo/Typography"

interface DropdownType {
  options: OptionType[]
  values?: OptionType[]
  onSelect: (e: OptionType[]) => void
}

export interface CoodrinateType {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}

export const DropdownMulti = ({ options, values, onSelect, ...rest }: DropdownType) => {
  const selectRef = useRef<any>(null)
  const deleteIconRef = useRef<any>(null)
  const [selectCoordinate, setselectCoordinate] = useState<CoodrinateType>()
  const [showItems, setshowItems] = useState<boolean>(false)
  const [localOptions, setlocalOptions] = useState(options)
  const [localValue, setlocalValue] = useState<OptionType[] | []>(values ? values : [])

  //GET BOUNDARY COORDINATE OF SELECT BOX - IF WE SELECT MULTIPLE ITEMS AND IT GET BIGGER THEN IT WILL TAKE MORE HEIGHT (FOR CHANGE INITIAL POSITION OF ITEM SELECTIONS)
  useEffect(() => {
    const coordinateBox = selectRef.current.getBoundingClientRect()
    setselectCoordinate(coordinateBox)
  }, [localValue.length])

  //SCROLL
  useEffect(() => {
    if (showItems) {
      const getBodyCoordinate: any = document.querySelector("body")
      if (getBodyCoordinate?.scrollHeight > getBodyCoordinate?.clientHeight) {
        window.scrollTo(0, getBodyCoordinate?.scrollHeight)
      }
    }
  }, [showItems])

  //SELECT AN ITEM FROM DROPDOWN --- IT WILL REMOVE AN ITEM FROM SELECTION LIST AND ADD AN ITEM TO SELECTED LIST AND ALSO PASS TO onSelect FUNCTION TO GET IN ITS PARENT ELEMENT
  const itemSelectHandler = (e: OptionType): void => {
    let newValues: OptionType[] = []
    newValues = [
      ...localValue,
      {
        label: e.label,
        value: e.value,
      },
    ]
    setlocalValue(newValues)
    setlocalOptions([...localOptions.filter((el) => el.value !== e.value)])
    setshowItems(false)
    onSelect(newValues)
  }

  //HANDLER TO OPEN/CLOSE EVERYTIME CLIENT CLICK ON SELECTION CARD
  const openSelectionBoxHandler = (e: MouseEvent) => {
    if (e.target !== deleteIconRef.current) {
      setshowItems((prev) => !prev)
    } else {
      setshowItems(false)
    }
  }

  //DELETE AN ITEM FROM SELECTED LIST---ADD THAT ITEM TO SELECTION LIST---SEND TO onSelect FUNCTION TO GET IN ITS PARENT ELEMENT
  const deleteItemHandler = (el: OptionType) => {
    setshowItems((prev) => !prev)
    const filteredValues = [...localValue.filter((item: OptionType) => item.value !== el.value)]
    setlocalOptions([...localOptions, el])
    setlocalValue(filteredValues)
    onSelect(filteredValues)
  }

  //CLOSE SELECTION LIST WHEN WE CLICK OUTSIDE OF IT!
  const clickOutside = useCallback((e: MouseEvent): void => {
    if (selectRef?.current.contains(e.target)) {
      return setshowItems(true)
    } else {
      return setshowItems(false)
    }
  }, [])
  useEffect(() => {
    if (showItems) {
      window.addEventListener("mousedown", clickOutside)
    }
    return () => window.removeEventListener("mousedown", clickOutside)
  }, [showItems, clickOutside])

  //HANDLER TO DELETE ALL SELECTED ITEMS AND ADD IT TO OPTIONS
  const deleteAllSelectedHandler = () => {
    setlocalValue([])
    setlocalOptions([...localOptions, ...localValue])
    onSelect([])
  }

  return (
    <div className='relative max-w-xs' {...rest} ref={selectRef} onClick={(e: any) => openSelectionBoxHandler(e)}>
      <div className='flex flex-1 flex-wrap items-center cursor-pointer border rounded-md'>
        <div className='flex flex-1 items-center overflow-x-hidden flex-wrap'>
          {localValue?.length > 0 ? (
            localValue?.map((el: OptionType, index: number) => (
              <div
                className='my-1 mx-0.5 flex items-center  flex-shrink-0 bg-slate-200 hover:text-slate-500 rounded pl-1 first-of-type:ml-1'
                key={`${el.label}-value-${index}`}
              >
                <Typography variant='small' className='p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='flex items-center w-4 h-4 rounded text-red-400 cursor-pointer hover:bg-red-500 hover:text-slate-300'
                    onClick={() => deleteItemHandler(el)}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </Typography>
                <Typography variant='small' className='text-xs px-1'>
                  {el.label}
                </Typography>
              </div>
            ))
          ) : (
            <Typography className='py-1 px-2 mx-0.5'>Selected</Typography>
          )}
        </div>
        <Typography variant='small' className='p-1 ml-auto'>
          <svg
            ref={deleteIconRef}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='flex items-center w-5 h-5 rounded text-red-400 cursor-pointer hover:bg-red-500 hover:text-slate-300'
            onClick={deleteAllSelectedHandler}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
              className='pointer-events-none'
            />
          </svg>
        </Typography>{" "}
      </div>
      {selectCoordinate && (
        <div
          className='absolute max-h-44 overflow-y-auto left-0 w-full flex flex-col shadow-md z-50'
          style={{ top: selectCoordinate.height }}
        >
          {showItems &&
            localOptions.length > 0 &&
            localOptions.map((el: OptionType, index: number) => (
              <div
                className='px-4 py-2 text-sm cursor-pointer bg-slate-50 hover:bg-slate-200 '
                key={`${el.label}-${index}`}
                onClick={() => itemSelectHandler(el)}
              >
                {el.label}
              </div>
            ))}
          {showItems && localOptions.length === 0 && (
            <div className='px-4 py-2 text-sm cursor-pointer bg-slate-50'>No Item</div>
          )}
        </div>
      )}
    </div>
  )
}

DropdownMulti.displayName = "DropdownMulti"
