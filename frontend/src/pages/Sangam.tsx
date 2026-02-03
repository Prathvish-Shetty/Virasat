import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Heart,
  Share,
  Clock,
  Shield,
  Verified,
  Users,
  Award,
  BookOpen,
  MapPin,
  Star,
  Filter,
} from "lucide-react"

const expertProfiles = [
  {
    id: 1,
    name: "Dr. Rajesh Kochhar",
    title: "Senior Sanskrit Scholar",
    institution: "Banaras Hindu University",
    location: "Varanasi, UP",
    expertise: ["Vedic Literature", "Sanskrit Grammar", "Ancient Astronomy"],
    verification: "University Verified",
    rating: 4.9,
    contributions: 156,
    followers: 2400,
    avatar: "/placeholder-user.jpg",
    specialization: "Rigveda & Astronomical Texts",
    languages: ["Sanskrit", "Hindi", "English"],
    experience: "25+ years",
    publications: 45,
    verified: true,
  },
  {
    id: 2,
    name: "Pandit Vishnu Sharma",
    title: "Temple Head Priest",
    institution: "Kedarnath Temple",
    location: "Kedarnath, Uttarakhand",
    expertise: ["Ritual Procedures", "Vedic Chanting", "Temple Traditions"],
    verification: "Temple Board Certified",
    rating: 4.8,
    contributions: 89,
    followers: 1800,
    avatar: "/placeholder-user.jpg",
    specialization: "Yajurveda & Temple Rituals",
    languages: ["Sanskrit", "Hindi"],
    experience: "30+ years",
    publications: 12,
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Meera Rajagopalan",
    title: "Cultural Historian",
    institution: "Indian Council of Historical Research",
    location: "Chennai, TN",
    expertise: ["South Indian Traditions", "Temple Architecture", "Classical Dance"],
    verification: "ICHR Certified",
    rating: 4.9,
    contributions: 203,
    followers: 3200,
    avatar: "/placeholder-user.jpg",
    specialization: "Dravidian Heritage & Arts",
    languages: ["Tamil", "Sanskrit", "English"],
    experience: "20+ years",
    publications: 67,
    verified: true,
  },
  {
    id: 4,
    name: "Acharya Ramakrishna Das",
    title: "Vedanta Scholar",
    institution: "Ramakrishna Mission",
    location: "Belur Math, WB",
    expertise: ["Advaita Vedanta", "Upanishads", "Spiritual Philosophy"],
    verification: "Mission Certified",
    rating: 4.9,
    contributions: 134,
    followers: 2800,
    avatar: "/placeholder-user.jpg",
    specialization: "Upanishads & Vedanta",
    languages: ["Sanskrit", "Bengali", "Hindi", "English"],
    experience: "35+ years",
    publications: 23,
    verified: true,
  },
]

const recentDiscussions = [
  {
    id: 1,
    title: "Authentic interpretation of Nasadiya Sukta (Rigveda 10.129)",
    content:
      "Seeking scholarly consensus on the cosmological implications of the creation hymn. Multiple interpretations exist across different commentaries...",
    author: "Dr. Rajesh Kochhar",
    category: "Vedic Studies",
    replies: 23,
    likes: 45,
    timeAgo: "2 hours ago",
    tags: ["Rigveda", "Cosmology", "Philosophy"],
    verified: true,
    priority: "high",
  },
  {
    id: 2,
    title: "Regional variations in Ganesha Chaturthi rituals: Documentation needed",
    content:
      "Compiling authentic regional practices for Ganesha Chaturthi. Temple priests and cultural historians, please share verified traditional methods...",
    author: "Dr. Meera Rajagopalan",
    category: "Festivals",
    replies: 18,
    likes: 32,
    timeAgo: "4 hours ago",
    tags: ["Ganesha", "Festivals", "Regional Traditions"],
    verified: true,
    priority: "medium",
  },
  {
    id: 3,
    title: "Collaborative project: Digitizing ancient palm leaf manuscripts",
    content:
      "Initiating a collaborative effort to digitize and translate rare palm leaf manuscripts. Seeking Sanskrit scholars and digital preservation experts...",
    author: "Pandit Vishnu Sharma",
    category: "Preservation",
    replies: 31,
    likes: 67,
    timeAgo: "6 hours ago",
    tags: ["Manuscripts", "Digitization", "Preservation"],
    verified: true,
    priority: "high",
  },
]

const verificationLevels = [
  {
    level: "Temple Certified",
    description: "Licensed temple priests and religious authorities",
    count: 150,
    color: "bg-orange-100 text-orange-800",
  },
  {
    level: "University Verified",
    description: "Academic scholars from recognized institutions",
    count: 200,
    color: "bg-blue-100 text-blue-800",
  },
  {
    level: "Institution Certified",
    description: "Experts from cultural and research institutions",
    count: 120,
    color: "bg-green-100 text-green-800",
  },
  {
    level: "Heritage Authority",
    description: "Government heritage department officials",
    count: 80,
    color: "bg-purple-100 text-purple-800",
  },
]

export default function SangamPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg font-devanagari">सं</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold">Sangam Expert Network</h1>
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure and verified community platform for licensed temples, historians, and scholars to share knowledge and
            collaborate on heritage preservation.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
              <Shield className="w-4 h-4 mr-2" />
              550+ Verified Experts
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
              <Verified className="w-4 h-4 mr-2" />
              100% Authentication Required
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="experts" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="experts">Expert Profiles</TabsTrigger>
            <TabsTrigger value="discussions">Active Discussions</TabsTrigger>
            <TabsTrigger value="verification">Verification System</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration Tools</TabsTrigger>
          </TabsList>

          {/* Expert Profiles Tab */}
          <TabsContent value="experts" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Verified Heritage Experts</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Expertise
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Verified className="h-4 w-4 mr-2" />
                  Apply for Verification
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {expertProfiles.map((expert) => (
                <Card key={expert.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={expert.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-lg">
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <CardTitle className="text-lg">{expert.name}</CardTitle>
                          {expert.verified && <Verified className="h-5 w-5 text-blue-600" />}
                        </div>
                        <p className="text-sm text-muted-foreground">{expert.title}</p>
                        <p className="text-sm font-medium text-orange-600">{expert.institution}</p>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{expert.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{expert.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{expert.followers} followers</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Specialization:</p>
                      <p className="text-sm text-muted-foreground">{expert.specialization}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {expert.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-orange-600">{expert.contributions}</div>
                        <div className="text-xs text-muted-foreground">Contributions</div>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-600">{expert.publications}</div>
                        <div className="text-xs text-muted-foreground">Publications</div>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-600">{expert.experience}</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <Badge
                        className={`text-xs ${expert.verification.includes("Temple") ? "bg-orange-100 text-orange-800" : expert.verification.includes("University") ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}
                      >
                        {expert.verification}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          <BookOpen className="h-3 w-3 mr-1" />
                          View Work
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Active Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Expert Discussions</h2>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start New Discussion
              </Button>
            </div>

            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <Card
                  key={discussion.id}
                  className={`hover:shadow-md transition-shadow ${discussion.priority === "high" ? "border-l-4 border-l-red-500" : "border-l-4 border-l-orange-500"}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.priority === "high" && (
                            <Badge className="bg-red-100 text-red-800 text-xs">High Priority</Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {discussion.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{discussion.timeAgo}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl hover:text-primary cursor-pointer mb-2">
                          {discussion.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-muted-foreground">by</span>
                          <span className="text-sm font-medium">{discussion.author}</span>
                          {discussion.verified && <Verified className="h-4 w-4 text-blue-600" />}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{discussion.content}</CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies} Expert Replies</span>
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Join Discussion
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Verification System Tab */}
          <TabsContent value="verification" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Multi-Level Verification System</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our rigorous verification process ensures that only authentic experts with proven credentials can join
                the Sangam network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {verificationLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{level.level}</CardTitle>
                      <Badge className={level.color}>{level.count} Verified</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{level.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span>Verification Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Application Submission</h4>
                    <p className="text-sm text-muted-foreground">
                      Submit credentials, publications, and institutional affiliations
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Expert Review</h4>
                    <p className="text-sm text-muted-foreground">
                      Peer review by existing verified experts in the field
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Verification Badge</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive verified status and access to expert network
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Collaboration Tools Tab */}
          <TabsContent value="collaboration" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Advanced Collaboration Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized tools designed for heritage experts to collaborate on research, documentation, and knowledge
                preservation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Collaborative Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Work together on research projects, share findings, and co-author papers with verified experts
                    across institutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Peer Review System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Submit your work for peer review by qualified experts and provide reviews for others in your field
                    of expertise.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Expert Committees</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Join specialized committees for different aspects of heritage preservation and cultural
                    documentation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Recognition System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Earn recognition for your contributions through peer ratings, citations, and community
                    acknowledgments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle>Secure Messaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Private, encrypted communication channels for sensitive discussions and confidential research
                    collaboration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Share className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle>Knowledge Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share rare manuscripts, research data, and cultural artifacts through secure, authenticated
                    channels.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Network Statistics */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Sangam Network Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">550+</div>
              <div className="text-sm text-muted-foreground">Verified Experts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">1,200+</div>
              <div className="text-sm text-muted-foreground">Research Collaborations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">300+</div>
              <div className="text-sm text-muted-foreground">Published Papers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-muted-foreground">Authenticity Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
