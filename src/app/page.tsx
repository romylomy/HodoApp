"use client"

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, Filter } from 'lucide-react'; 
import { useState, useCallback} from "react";
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { QueryResult } from '@upstash/vector'
import axios from "axios";
import type { bikeRoute } from "@/db";
import Product from '@/components/products/Product'
import {ProductState} from "@/lib/validators/product-validator"
import ProductSkeleton from '@/components/products/ProductSkeleton'
import EmptyState from '@/components/products/EmptyState'
import debounce from "lodash.debounce"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const SORT_OPTIONS =[
  {name:"None", value:"none"}, 
  {name:"Distance: low to high", value:"distance-asc"},
  {name:"Distance: high to low", value:"distance-desc"}, 
] as const

export default function Home() {

  const DEFAULT_CUSTOM_DISTANCE = [0,100] as [number, number]

  const [filter, setFilter] = useState<ProductState>({
    difficulty:["easy", "moderate", "hard"],
    distance:{isCustom:false, range:DEFAULT_CUSTOM_DISTANCE },
    nationalpark:['banff', 'jasper', 'waterton'],
    sort:'none',
  })

  const {data: products, refetch} = useQuery({
    queryKey:['products'],
    queryFn: async () => {
      const {data} = await axios.post<QueryResult<bikeRoute>[]>(
        'http://localhost:3000/api/products', 
        {
          filter:{
            sort: filter.sort,
            difficulty: filter.difficulty, 
            nationalpark: filter.nationalpark,
            distance: filter.distance.range
            
          },
        }
      )
      return data
    }
  })

 const onSubmit = () => refetch()

 const debouncedSubmit = debounce(onSubmit, 400)
 const _debouncedSubmit = useCallback(debouncedSubmit, [])

  console.log( products);

  const SUBCATEGORIES = [
    { name: 'Biking', selected: true, href: '#' },
    { name: 'Hiking', selected: false, href: '#' },
  ]

  const DIFFICULTY_FILTERS = {
    id: 'difficulty',
    name: 'Difficulty',
    options: [
      { value: 'easy', label: 'Easy' },
      { value: 'moderate', label: 'Moderate' },
      { value: 'hard', label: 'Hard' },
    ] as const,
  }

  const NATIONALPARK_FILTERS = {
    id: 'nationalPark',
    name: 'nationalPark',
    options: [
      { value: 'banff', label: 'Banff' },
      { value: 'jasper', label: 'Jasper' },
      { value: 'waterton', label: 'Waterton' },
    ] as const,
  }

  const DISTANCE_FILTERS = {
    id: 'distance',
    name: 'distance',
    options: [
      { value: [0, 100], label: 'Any distance' },
      { value: [0, 5], label: 'under 5k' },
      { value: [0, 10], label: 'under 10k' },
      { value: [0, 25], label: 'under 25k' },
    ] as const,
  }
  
  
  const applyArrayFilter = ({
    category, 
    value,
  }: { 
    category: keyof Omit<typeof filter, "distance" | "sort" >
    value: string 
  } ) => {
    const isFilterApplied = filter[category].includes(value as never)

    if (isFilterApplied){
      setFilter((prev)=>({
        ...prev, 
        [category]: (prev[category] as string[]).filter((v)=> v !==value)
      }))
    } else{
      setFilter((prev)=>({
        ...prev,
        [category]: [...prev[category], value]
      }))
    }
    _debouncedSubmit()
  }

  const minDistance = Math.min(filter.distance.range[0], filter.distance.range[1])
  const maxDistance = Math.max(filter.distance.range[0], filter.distance.range[1])

   
  
  
  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
    <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
        Hodo App
      </h1>
        <div className="flex items-center">
          <DropdownMenu>
          <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-fray-700 hover:text-gray-900 ">
            Sort
            <ChevronDown className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>

            {SORT_OPTIONS.map((option)=>(
              <button key={option.name}
              className={cn('text-left w-full block px-4 py-2 text-sm', {
                'text-gray-900 bg-gray-100': option.value === filter.sort,
                'text-gray-500': option.value !== filter.sort,
              })}
              onClick={() => {
                setFilter((prev) => ({
                  ...prev,
                  sort: option.value,
                }))

                _debouncedSubmit()

              }}>
              {option.name}
              </button>
            ))}

          </DropdownMenuContent>
        </DropdownMenu>

        <button className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'>
            <Filter className='h-5 w-5' />
          </button>

        </div>
    </div>

   <section className="pb-24 pt-6">
    <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
            {/* Filters */}

            <div className='hidden lg:block'>
              <ul className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'>
                {SUBCATEGORIES.map((category) => (
                  <li key={category.name}>
                    <button
                      disabled={!category.selected}
                      className='disabled:cursor-not-allowed disabled:opacity-60'>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              <Accordion type='multiple' className='animate-none'>
              {/* Difficulty filter */}
              <AccordionItem value='nationalPark'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Difficulty</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {DIFFICULTY_FILTERS.options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={`difficulty-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: 'difficulty',
                              value: option.value,
                            })
                            
                          }}
                          checked={filter.difficulty.includes(option.value)}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600'>
                          {option.label}
                        </label>
                      </li>
                    ))}
                   
                  </ul>
                </AccordionContent>
              </AccordionItem>
              </Accordion >
              
               {/*NationalPark */}

               <Accordion type='multiple' className='animate-none'>
    
              <AccordionItem value='difficulty'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>National Park</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {NATIONALPARK_FILTERS .options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>
                        <input
                          type='checkbox'
                          id={`nationalpark-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: 'nationalpark',
                              value: option.value,
                            })
                            
                          }}
                          checked={filter.nationalpark.includes(option.value)}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600'>
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              </Accordion >
              
              {/*NationalPark */}

            <Accordion type='multiple' className='animate-none'>
              
              <AccordionItem value='distance'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Distance</span>
                </AccordionTrigger>

                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {DISTANCE_FILTERS .options.map((option, optionIdx) => (
                      <li key={option.label} className='flex items-center'>
                         <input
                          type='radio'
                          id={`distance-${optionIdx}`}
                          onChange={() => {
                            setFilter((prev) => ({
                              ...prev,
                              distance: {
                                isCustom: false,
                                range: [...option.value],
                              },
                            }))
                            _debouncedSubmit()
                          
                          }}
                          checked={
                            !filter.distance.isCustom &&
                            filter.distance.range[0] === option.value[0] &&
                            filter.distance.range[1] === option.value[1]
                          }
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className='ml-3 text-sm text-gray-600'>
                          {option.label}
                        </label>
                      </li>
                    ))}
                     <li className='flex justify-center flex-col gap-2'>
                      <div>
                        <input
                            type='radio'
                            id={`distance-${DISTANCE_FILTERS.options.length}`}
                            onChange={() => {
                              setFilter((prev) => ({
                                ...prev,
                                distance: {
                                  isCustom: true,
                                  range: [0, 100],
                                },
                              }))
                              _debouncedSubmit()

                            }}
                            checked={filter.distance.isCustom}
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        <label
                          htmlFor={`price-${DISTANCE_FILTERS.options.length}`}
                          className='ml-3 text-sm text-gray-600'>
                          Custom
                        </label>

                        <div className='flex py-5 justify-between'>
                          <p className=' font-medium'>Distance</p>
                          <div>
                            {filter.distance.isCustom 
                              ? minDistance.toFixed(0)
                              : filter.distance.range[0].toFixed(0)} {' '}
                              Km - {' '}

                            {filter.distance.isCustom ? maxDistance.toFixed(0) 
                              :  filter.distance.range[1].toFixed(0)} Km
                          </div>

                        </div>

                      </div>

                      <Slider
                        className={cn({
                          'opacity-50': !filter.distance.isCustom,
                        })}
                        disabled={!filter.distance.isCustom}
                        onValueChange={(range) => {
                          const [newMin, newMax] = range

                          setFilter((prev) => ({
                            ...prev,
                            distance: {
                              isCustom: true,
                              range: [newMin, newMax],
                            },
                          }))
                          _debouncedSubmit()
                          
                        }}
                        value={
                          filter.distance.isCustom
                            ? filter.distance.range
                            : DEFAULT_CUSTOM_DISTANCE
                        }
                        min={DEFAULT_CUSTOM_DISTANCE[0]}
                        defaultValue={DEFAULT_CUSTOM_DISTANCE}
                        max={DEFAULT_CUSTOM_DISTANCE[1]}
                        step={5}
                      />
                    
                      
                    </li>
                    
                  
                  </ul>
                </AccordionContent>
              </AccordionItem>
              </Accordion >

            </div>

           
            {/* products */}

            <ul className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {products && products.length === 0 ? (
              <EmptyState />
            ) : products ? (
              products.map((product) => <Product product={product.metadata!} />)
            ) : (
              new Array(12)
                .fill(null)
                .map((_, i) => <ProductSkeleton key={i} />)
            )}
          </ul>


      </div> 
    </section> 
        
    </main>
  );
}
