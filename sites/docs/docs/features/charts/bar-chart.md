---
sidebar_position: 5
title: BarChart
hide_title: true
hide_table_of_contents: false
---

<h1 class="community-header"><span class="gradient">&lt;BarChart/></span></h1>

![bar](/img/exg-bar-nt.svg) 

```markdown
<BarChart 
    data={data.query_name} 
    x=column_x 
    y=column_y
/>
```

## Examples

### Bar
![bar](/img/exg-bar-nt.svg) 

```markdown
<BarChart 
    data={data.value_by_region} 
    x=region
    y=value 
    xAxisTitle=Region
/>
```

### Horizontal Bar
![bar](/img/exg-horizontal-bar-nt.svg) 

```markdown
<BarChart 
    data={data.value_by_region}
    x=country 
    y=value 
    swapXY=true
/>
```

### Stacked Bar
![bar](/img/exg-stacked-bar-nt.svg) 

```markdown
<BarChart 
    data={data.annual_value_by_region} 
    x=year 
    y=value 
    series=region
/>
```

### Horizontal Stacked Bar
![bar](/img/exg-horizontal-stacked-bar-nt.svg) 

```markdown
<BarChart 
    data={data.annual_value_by_region} 
    swapXY=true 
    x=year 
    y=value 
    series=region 
    xType=category 
    sort=false
/>
```

### Grouped Bar
![bar](/img/exg-grouped-bar-nt.svg) 

```markdown
<BarChart 
    data={data.annual_value_by_region} 
    x=year 
    y=value 
    series=region 
    type=grouped
/>
```

### Horizontal Grouped Bar
![bar](/img/exg-horizontal-grouped-bar-nt.svg) 

```markdown
<BarChart 
    data={data.annual_value_by_region} 
    swapXY=true 
    x=year 
    y=value 
    series=region 
    type=grouped 
    xType=category
/>
```

### Long Bar Chart
If you create a bar chart with many x-axis items (e.g., names of departments), Evidence will extend the height of the chart for you to avoid the bars becoming squished. See Long Bar example below.

![long-bar](/img/exg-long-bar.svg) 

```markdown
<BarChart 
    data={complaints_by_category} 
    x=category 
    y=complaints 
    swapXY=true 
    yAxisTitle="Calls Received" 
/>
```

## Props

### Data
<table>						 
<tr>	<th class='tleft'>Name</th>	<th class='tleft'>Description</th>	<th>Required?</th>	<th>Options</th>	<th>Default</th>	</tr>
<tr>	<td>data</td>	<td>Query name, referenced as a subset of Evidence's data object</td>	<td class='tcenter'>Yes</td>	<td class='tcenter'>data object</td>	<td class='tcenter'>-</td>	</tr>
<tr>	<td>x</td>	<td>Column to use for the x-axis of the chart</td>	<td class='tcenter'>Yes</td>	<td class='tcenter'>column name</td>	<td class='tcenter'>First column</td>	</tr>
<tr>	<td>y</td>	<td>Column(s) to use for the y-axis of the chart</td>	<td class='tcenter'>Yes</td>	<td class='tcenter'>column name | array of column names</td>	<td class='tcenter'>Any non-assigned numeric columns</td>	</tr>
<tr>	<td>sort</td>	<td>Whether to apply default sort to your data. Default is x ascending for number and date x-axes, and y descending for category x-axes</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>true</td>	</tr>
<tr>	<td>series</td>	<td>Column to use as the series (groups) in a multi-series chart</td>	<td class='tcenter'>-</td>	<td class='tcenter'>column name</td>	<td class='tcenter'>-</td>	</tr>
</table>																																																	

### Series
<table>						 
<tr>	<th class='tleft'>Name</th>	<th class='tleft'>Description</th>	<th>Required?</th>	<th>Options</th>	<th>Default</th>	</tr>
<tr>	<td>type</td>	<td>Grouping method to use for multi-series charts</td>	<td class='tcenter'>-</td>	<td class='tcenter'>stacked | grouped</td>	<td class='tcenter'>stacked</td>	</tr>
<tr>	<td>stackName</td>	<td>Name for an individual stack. If separate Bar components are used with different stackNames, the chart will show multiple stacks</td>	<td class='tcenter'>-</td>	<td class='tcenter'>string</td>	<td class='tcenter'>-</td>	</tr>
<tr>	<td>fillColor</td>	<td>Color to override default series color. Only accepts a single color.</td>	<td class='tcenter'>-</td>	<td class='tcenter'>CSS name | hexademical | RGB | HSL</td>	<td class='tcenter'>-</td>	</tr>
<tr>	<td>fillOpacity</td>	<td>% of the full color that should be rendered, with remainder being transparent</td>	<td class='tcenter'>-</td>	<td class='tcenter'>number (0 to 1)</td>	<td class='tcenter'>1</td>	</tr>
<tr>	<td>outlineWidth</td>	<td>Width of line surrounding each bar</td>	<td class='tcenter'>-</td>	<td class='tcenter'>number</td>	<td class='tcenter'>0</td>	</tr>
<tr>	<td>outlineColor</td>	<td>Color to use for outline if outlineWidth > 0</td>	<td class='tcenter'>-</td>	<td class='tcenter'>CSS name | hexademical | RGB | HSL</td>	<td class='tcenter'>-</td>	</tr>
</table>											

### Chart
<table>						 
<tr>	<th class='tleft'>Name</th>	<th class='tleft'>Description</th>	<th>Required?</th>	<th>Options</th>	<th>Default</th>	</tr>
<tr>	<td>swapXY</td>	<td>Swap the x and y axes to create a horizontal chart</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>title</td>	<td>Chart title. Appears at top left of chart.</td>	<td class='tcenter'>-</td>	<td class='tcenter'>string</td>	<td class='tcenter'>-</td>	</tr>
<tr>	<td>subtitle</td>	<td>Chart subtitle. Appears just under title.</td>	<td class='tcenter'>-</td>	<td class='tcenter'>string</td>	<td class='tcenter'>-</td>	</tr>
<tr>	<td>legend</td>	<td>Turns legend on or off. Legend appears at top center of chart.</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>true for multiple series</td>	</tr>
<tr>	<td>xAxisTitle</td>	<td>Name to show under x-axis. If 'true', formatted column name is used. Only works with swapXY=false</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | string | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>yAxisTitle</td>	<td>Name to show beside y-axis. If 'true', formatted column name is used.</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | string | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>xGridlines</td>	<td>Turns on/off gridlines extending from x-axis tick marks (vertical lines when swapXY=false)</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>yGridlines</td>	<td>Turns on/off gridlines extending from y-axis tick marks (horizontal lines when swapXY=false)</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>true</td>	</tr>
<tr>	<td>xBaseline</td>	<td>Turns on/off thick axis line (line appears at y=0)</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>true</td>	</tr>
<tr>	<td>yBaseline</td>	<td>Turns on/off thick axis line (line appears directly alongside the y-axis labels)</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>xTickMarks</td>	<td>Turns on/off tick marks for each of the x-axis labels</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>yTickMarks</td>	<td>Turns on/off tick marks for each of the y-axis labels</td>	<td class='tcenter'>-</td>	<td class='tcenter'>true | false</td>	<td class='tcenter'>false</td>	</tr>
<tr>	<td>yMin</td>	<td>Starting value for the y-axis</td>	<td class='tcenter'>-</td>	<td class='tcenter'>number</td>	<td class='tcenter'>-</td>	</tr>
</table>												

