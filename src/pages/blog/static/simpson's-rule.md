---
layout: "🧊/Markdown.astro"
authors: "Thuong Vu"
title: "Simpson's Rule"
cover: "https://images.unsplash.com/photo-1527193874670-bf698eaa3d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
releaseDate: "2023-11-01"
---

Another rule for approximate integration results from using parabolas instead of straight
line segments to approximate a curve. As before, we divide $[a,b]$ into $n$ subintervals
of equal length $ h=\Delta x=(b-a)/n$ , but this time we assume that n is an even number.
Then on each consecutive pair of intervals we approximate the curve $y=f(x)\geq0$
by a parabola as shown in Figure 8. If $y_i=f(x_i)$, then $P_i(x_i,y_i)$, yid is the point on the curve
lying above $x_i$. A typical parabola passes through three consecutive points $P_i$, $P_{i+1}$,
and $P_{i+2}$.

To simplify our calculations, we first consider the case where $x_0=-h$, $x_1=0$, and $x_2=h$.
(See Figure 9.) We know that the **equation** of the parabola through $P_0$, $P_1$, and $P_2$
is of the form $y=Ax^2+Bx+C$ and so the area under the parabola from $x=-h$ to $x=h$

$$
\begin{split}
\int _{-h}^{h}( Ax^{2} +Bx+C) dx &=2\int _{0}^{h}( Ax^{2} +C)dx=2[ A\frac{x^{3}}{3} +Cx]\Big|_{0}^{h}\\
&=2( A\frac{h^{3}}{3} +Ch) =\frac{h}{3}( 2Ah^{2} +6C)
\end{split}
$$

But, since the parabola passes through $P_0(-h,y_0)$, $P_1(0,y_1)$ and $P_2(h,y_2)$ we have

$$
\begin{split}
y_0&=A(-h)^2+B(-h)+C=Ah^2-Bh+C\\
y_1&=C\\
y_2&=Ah^2+Bh+C
\end{split}
$$

and therefore: $y_0+4y_1+y_2=2Ah^{2} +6C$

Thus we can rewrite the area under the parabola as $\displaystyle\frac{h}{3}(y_0+4y_1+y_2)$

Now by shifting this parabola horizontally we do not change the area under it. This means that the area
under the parabola through $P_0$, $P_1$, and $P_2$ from $x=x_0$ to $x=x_2$ in Figure 8 is still

$$\displaystyle\frac{h}{3}(y_0+4y_1+y_2)$$

Similarly, the area under the parabola through $P_2$, $P_3$, and $P_4$ from $x=x_2$ to $x=x_4$ is

$$\frac{h}{3}(y_2+4y_3+y_4)$$

If we compute the areas under all the parabolas in this manner and add the results, we get

$$
\begin{split}
\int _{a}^{b}f(x)dx&\approx\frac{h}{3}(y_0+4y_1+y_2)+\frac{h}{3}(y_2+4y_3+y_4)+...+\frac{h}{3}(y_{n-2}+4y_{n-1}+y_n)\\
&=\frac{h}{3}(y_0+4y_1+2y_2+4y_3+2y_4+...+2y_{n-2}+4y_{n-1}+y_n)
\end{split}
$$

Although we have derived this approximation for the case in which $f(x)\geq0$, it is a
reasonable approximation for any continuous function f and is called Simpson’s Rule
after the English mathematician Thomas Simpson (1710–1761). Note the pattern of
coefficients: $1,4,2,4,2,4,2,...,4,2,4,1$

> ### **Simpson’s Rule:**
>
> $$
> \tag{\href{#}{$\oplus$}}
> \begin{split}
> \int_{a}^{b}f(x)dx\approx S_n=\frac{\Delta x}{3}[f(x_0)&+4f(x_1)+2f(x_2)+4f(x_3)+...\\
> &+2f(x_{n-2})+4f(x_{n-1})+f(x_n)]
> \end{split}
> $$
