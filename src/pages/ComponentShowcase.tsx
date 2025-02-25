import {Button} from "@/components/ui/button";
import {AppSidebar} from "@/components/common/AppSidebar.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import Footer from "@/components/common/Footer.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.tsx";
import {ThemeSwitch} from "@/components/common/ThemeSwitch.tsx";
import HeaderWithThemeSwitch from "@/components/common/header/HeaderWithThemeSwitch.tsx";

export default function ComponentShowcasePage(){
    return (
        <>
            <SidebarProvider>
            {/*add sidebar*/}
            <AppSidebar />
                {/*part that the sidebar shrinks when open*/}
                <SidebarInset>
                {/*header*/}
                <HeaderWithThemeSwitch>
                    <SidebarTrigger className="-ml-1" />
                </HeaderWithThemeSwitch>

                {/*vertical padding of 8*/}
                <main className="py-8">
                    {/*display button variants*/}
                    <div className="flex flex-wrap gap-10 m-4">
                        <Button variant="default">default</Button>
                        <div className="bg-primary p-1 flex justify-center">
                            <Button variant="negative">negative</Button>
                        </div>
                        <Button variant="destructive">destructive</Button>
                        <Button variant="outline">outline</Button>
                        <Button variant="ghost">ghost</Button>
                        <Button variant="primary">primary</Button>
                        <Button variant="secondary">secondary</Button>
                        <Button variant="gradient">gradient</Button>
                        <Button variant="gradient_outline">gradient_outline</Button>
                        <Button variant="link">link</Button>
                    </div>
                    {/*an example of card usage*/}
                    <div className="flex items-center justify-center">
                        <Card className="flex flex-col w-100">
                            <CardHeader>
                                <CardTitle className="text-2xl">Naslov</CardTitle>
                                <CardDescription>
                                    Ovo je kartica
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-row items-center">
                                        <Label className="w-auto">Promeni temu:</Label>
                                        <ThemeSwitch />
                                    </div>

                                    {/*input field usage example*/}
                                    <div className="grid gap-3">
                                        <Label>Unesi nesto:</Label>
                                        <Input placeholder="cao"></Input>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                {/*avatar usage example*/}
                                <Avatar className="size-8 rounded-lg">
                                    <AvatarFallback className="rounded-lg icon-[ph--user-circle]"/>
                                </Avatar>

                                {/*icon usage example*/}
                                <span className="size-8 icon-[ph--bank]" />
                            </CardFooter>

                        </Card>


                    </div>
                </main>

                {/*add footer*/}
                <Footer/>

                </SidebarInset>
            </SidebarProvider>
        </>
    )
}